import React from 'react';
import { 
  Info, 
  Wallet, 
  Target, 
  CreditCard, 
  CheckCircle, 
  Clock, 
  Timer, 
  DollarSign,
  // Add more icons that might be used as milestone icons
  Package,
  Settings,
  Truck,
  CheckSquare,
  Zap,
  Cpu,
  Box
} from 'lucide-react';

const ProductTabs = ({ 
  product, 
  activeTab, 
  setActiveTab, 
  formatCurrency, 
  milestones, 
  escrowData,
  currentMilestoneIndex,
  getMilestoneStatus,
  getStatusColor
}) => {
  // Safely handle null escrowData with fallback values
  const safeEscrowData = escrowData || {
    totalAmount: 0,
    releasedAmount: 0,
    pendingAmount: 0
  };

  // Create a mapping of icon names to icon components
  const iconMap = {
    Package,
    Settings,
    Truck,
    CheckSquare,
    Zap,
    Cpu,
    Box,
    Target,
    Wallet,
    Info,
    CreditCard,
    CheckCircle,
    Clock,
    Timer,
    DollarSign
  };

  // Helper function to get the icon component
  const getIconComponent = (iconName) => {
    return iconMap[iconName] || Box; // Fallback to Box icon if not found
  };

  return (
    <div className="mt-12 bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="border-b border-gray-200">
        <nav className="flex">
          {[
            { id: 'overview', name: 'Overview', icon: Info },
            { id: 'escrow', name: 'Escrow Account', icon: Wallet },
            { id: 'milestones', name: 'Project Milestones', icon: Target }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-[#6b3e26] text-[#6b3e26]'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <tab.icon size={18} />
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      <div className="p-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Funding Progress */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Funding Progress</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-semibold">{formatCurrency(product.amountRaised)} raised</span>
                  <span className="text-[#6b3e26] font-bold">{product.percentageFunded}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                  <div
                    className="bg-gradient-to-r from-[#6b3e26] to-[#8b5c3c] h-4 rounded-full transition-all duration-1000"
                    style={{ width: `${Math.min(product.percentageFunded, 100)}%` }}
                  ></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                  <div>
                    <div className="font-semibold text-gray-800">{product.backersCount}</div>
                    <div className="text-gray-500">Backers</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{formatCurrency(product.fundingGoal || product.amountRaised * 2)}</div>
                    <div className="text-gray-500">Goal</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{Math.max(30 - Math.floor(product.percentageFunded / 10), 0)}</div>
                    <div className="text-gray-500">Days Left</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{formatCurrency(product.price)}</div>
                    <div className="text-gray-500">Pre-order</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Escrow Account Tab */}
        {activeTab === 'escrow' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Wallet size={24} className="text-[#6b3e26]" />
              <h3 className="text-xl font-semibold">Escrow Account Details</h3>
            </div>

            {/* Escrow Overview Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
                <CreditCard size={32} className="text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-blue-800">{formatCurrency(safeEscrowData.totalAmount)}</div>
                <div className="text-sm text-blue-600">Total Escrowed</div>
              </div>
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
                <CheckCircle size={32} className="text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-green-800">{formatCurrency(safeEscrowData.releasedAmount)}</div>
                <div className="text-sm text-green-600">Released to Founder</div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg text-center">
                <Clock size={32} className="text-yellow-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-yellow-800">{formatCurrency(safeEscrowData.pendingAmount)}</div>
                <div className="text-sm text-yellow-600">Pending Release</div>
              </div>
            </div>

            {/* Escrow Timeline */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Escrow Release Schedule</h4>
              <div className="space-y-4">
                {milestones.map((milestone, index) => {
                  const status = getMilestoneStatus(index);
                  const releaseAmount = (safeEscrowData.totalAmount * milestone.percentage) / 100;
                  
                  return (
                    <div key={milestone.id} className="flex items-center justify-between p-4 bg-white rounded-lg border">
                      <div className="flex items-center gap-4">
                        <div className={`w-3 h-3 rounded-full ${
                          status === 'completed' ? 'bg-green-500' : 
                          status === 'active' ? 'bg-blue-500 animate-pulse' : 'bg-gray-300'
                        }`}></div>
                        <div>
                          <div className="font-medium">{milestone.name}</div>
                          <div className="text-sm text-gray-500">{milestone.percentage}% of total funds</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{formatCurrency(releaseAmount)}</div>
                        <div className={`text-xs px-2 py-1 rounded-full ${
                          status === 'completed' ? 'bg-green-100 text-green-700' :
                          status === 'active' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {status === 'completed' ? 'Released' : status === 'active' ? 'In Progress' : 'Pending'}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Escrow Info */}
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <Info size={20} className="text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">How Escrow Works</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Your money is safely held in escrow until milestones are completed</li>
                    <li>• Funds are released to the founder only after each milestone verification</li>
                    <li>• If milestones aren't met, you're eligible for a refund</li>
                    <li>• Our team monitors progress and ensures quality standards</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Milestones Tab */}
        {activeTab === 'milestones' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Target size={24} className="text-[#6b3e26]" />
              <h3 className="text-xl font-semibold">Project Milestones</h3>
            </div>

            {/* Progress Overview */}
            <div className="bg-gradient-to-r from-[#f5e5d8] to-[#fefaf6] p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold">Overall Progress</h4>
                <span className="text-2xl font-bold text-[#6b3e26]">
                  {Math.round(((currentMilestoneIndex + 1) / milestones.length) * 100)}%
                </span>
              </div>
              <div className="w-full bg-white bg-opacity-50 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-[#6b3e26] to-[#8b5c3c] h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${((currentMilestoneIndex + 1) / milestones.length) * 100}%` }}
                ></div>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                Milestone {currentMilestoneIndex + 1} of {milestones.length} • 
                Estimated completion: {milestones.slice(currentMilestoneIndex).reduce((sum, m) => sum + m.estimatedDays, 0)} days remaining
              </div>
            </div>

            {/* Detailed Milestones */}
            <div className="space-y-4">
              {milestones.map((milestone, index) => {
                const status = getMilestoneStatus(index);
                // Safely get the icon component
                const IconComponent = getIconComponent(milestone.icon);
                const releaseAmount = (safeEscrowData.totalAmount * milestone.percentage) / 100;
                
                return (
                  <div
                    key={milestone.id}
                    className={`border-2 rounded-lg p-6 transition-all ${getStatusColor(status)} ${
                      status === 'active' ? 'ring-2 ring-blue-200' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className={`p-3 rounded-full ${
                          status === 'completed' ? 'bg-green-100' :
                          status === 'active' ? 'bg-blue-100' : 'bg-gray-100'
                        }`}>
                          <IconComponent size={24} className={
                            status === 'completed' ? 'text-green-600' :
                            status === 'active' ? 'text-blue-600' : 'text-gray-400'
                          } />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-semibold text-lg">{milestone.name}</h4>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              status === 'completed' ? 'bg-green-100 text-green-700' :
                              status === 'active' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
                            }`}>
                              {status === 'completed' ? 'Completed' : 
                               status === 'active' ? 'In Progress' : 'Pending'}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-3">{milestone.description}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Timer size={14} />
                              <span>{milestone.estimatedDays} days</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <DollarSign size={14} />
                              <span>{formatCurrency(releaseAmount)} release</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Target size={14} />
                              <span>{milestone.percentage}% of funds</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Progress bar for active milestone */}
                    {status === 'active' && (
                      <div className="mt-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Progress</span>
                          <span className="text-sm text-blue-600">65%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Milestone Information */}
            <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg mt-6">
              <div className="flex items-start gap-3">
                <Info size={20} className="text-amber-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-amber-800 mb-2">Milestone System</h4>
                  <ul className="text-sm text-amber-700 space-y-1">
                    <li>• Each milestone must be completed before moving to the next phase</li>
                    <li>• Quality checks are performed at every milestone completion</li>
                    <li>• Funds are released progressively to ensure project success</li>
                    <li>• You can track real-time progress and communicate with the founder</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;