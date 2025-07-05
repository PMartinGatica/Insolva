import React, { useState, useEffect } from 'react';

interface CalculationResult {
  currentCosts: number;
  optimizedCosts: number;
  savings: number;
  savingsPercentage: number;
  monthlyROI: number;
  yearlyROI: number;
}

const SavingsCalculatorCompact: React.FC = () => {
  const [formData, setFormData] = useState({
    employees: 10,
    avgSalary: 80000,
    workingHours: 8,
    inefficiencyPercentage: 25
  });

  const [results, setResults] = useState<CalculationResult | null>(null);

  const handleInputChange = (field: string, value: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateSavings = () => {
    const {
      employees,
      avgSalary,
      workingHours,
      inefficiencyPercentage
    } = formData;

    // Cálculos simplificados
    const hourlyRate = avgSalary / (22 * workingHours * 12);
    const dailyLaborCost = employees * workingHours * hourlyRate;
    const monthlyLaborCost = dailyLaborCost * 22;
    const yearlyLaborCost = monthlyLaborCost * 12;

    // Costos actuales con ineficiencias
    const currentCosts = yearlyLaborCost;
    const inefficiencyCost = (inefficiencyPercentage / 100) * currentCosts;
    
    // Costos optimizados (reduciendo 60-80% de las ineficiencias)
    const optimizationRate = 0.7; // 70% de reducción promedio
    const optimizedCosts = currentCosts - (inefficiencyCost * optimizationRate);
    
    const savings = currentCosts - optimizedCosts;
    const savingsPercentage = (savings / currentCosts) * 100;
    const monthlyROI = savings / 12;
    const yearlyROI = savings;

    setResults({
      currentCosts,
      optimizedCosts,
      savings,
      savingsPercentage,
      monthlyROI,
      yearlyROI
    });
  };

  useEffect(() => {
    calculateSavings();
  }, [formData]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/20 dark:border-gray-700/30">
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Calculadora de <span className="text-gradient">Ahorros</span>
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Descubre cuánto puedes ahorrar optimizando tus procesos
        </p>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          {/* Empleados */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Número de empleados: {formData.employees}
            </label>
            <input
              type="range"
              min="5"
              max="100"
              value={formData.employees}
              onChange={(e) => handleInputChange('employees', parseInt(e.target.value))}
              className="slider w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
              <span>5</span>
              <span>100</span>
            </div>
          </div>

          {/* Salario promedio */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Salario promedio anual: {formatCurrency(formData.avgSalary)}
            </label>
            <input
              type="range"
              min="50000"
              max="200000"
              step="10000"
              value={formData.avgSalary}
              onChange={(e) => handleInputChange('avgSalary', parseInt(e.target.value))}
              className="slider w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
              <span>$50K</span>
              <span>$200K</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {/* Horas de trabajo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Horas de trabajo diarias: {formData.workingHours}h
            </label>
            <input
              type="range"
              min="6"
              max="12"
              value={formData.workingHours}
              onChange={(e) => handleInputChange('workingHours', parseInt(e.target.value))}
              className="slider w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
              <span>6h</span>
              <span>12h</span>
            </div>
          </div>

          {/* Porcentaje de ineficiencia */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Ineficiencia estimada: {formData.inefficiencyPercentage}%
            </label>
            <input
              type="range"
              min="10"
              max="50"
              value={formData.inefficiencyPercentage}
              onChange={(e) => handleInputChange('inefficiencyPercentage', parseInt(e.target.value))}
              className="slider w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
              <span>10%</span>
              <span>50%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      {results && (
        <div className="bg-gradient-to-r from-insolva-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold mb-1">
                {formatCurrency(results.savings)}
              </div>
              <div className="text-sm opacity-90">Ahorro Anual</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">
                {results.savingsPercentage.toFixed(1)}%
              </div>
              <div className="text-sm opacity-90">Reducción de Costos</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">
                {formatCurrency(results.monthlyROI)}
              </div>
              <div className="text-sm opacity-90">Ahorro Mensual</div>
            </div>
          </div>
          
          <div className="mt-4 text-center text-sm opacity-90">
            💡 Con INSOLVA podrías reducir tus costos operativos significativamente
          </div>
        </div>
      )}
    </div>
  );
};

export default SavingsCalculatorCompact;
