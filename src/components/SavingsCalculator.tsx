import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useAnimations';

interface CalculationResult {
  currentCosts: number;
  optimizedCosts: number;
  savings: number;
  savingsPercentage: number;
  monthlyROI: number;
  yearlyROI: number;
}

const SavingsCalculator: React.FC = () => {
  const sectionAnimation = useScrollAnimation();
  const [formData, setFormData] = useState({
    employees: 10,
    avgSalary: 80000,
    workingHours: 8,
    inefficiencyPercentage: 25,
    errorRate: 5,
    reworkCostPerHour: 15000
  });

  const [results, setResults] = useState<CalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: string, value: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateSavings = () => {
    setIsCalculating(true);
    
    // Simular procesamiento
    setTimeout(() => {
      const {
        employees,
        avgSalary,
        workingHours,
        inefficiencyPercentage,
        errorRate,
        reworkCostPerHour
      } = formData;

      // Cálculos simplificados para demostración
      const hourlyRate = avgSalary / (22 * workingHours * 12); // Salario por hora
      const dailyLaborCost = employees * workingHours * hourlyRate;
      const monthlyLaborCost = dailyLaborCost * 22; // 22 días laborables
      
      // Costos por ineficiencia
      const inefficiencyCost = monthlyLaborCost * (inefficiencyPercentage / 100);
      
      // Costos por reprocesos
      const dailyErrors = (employees * workingHours) * (errorRate / 100);
      const monthlyReworkCost = dailyErrors * 22 * reworkCostPerHour;
      
      // Costos actuales totales
      const currentCosts = monthlyLaborCost + inefficiencyCost + monthlyReworkCost;
      
      // Después de optimización (estimaciones conservadoras)
      const efficiencyImprovement = 0.30; // 30% mejora promedio
      const errorReduction = 0.60; // 60% reducción en errores
      
      const optimizedLaborCost = monthlyLaborCost * (1 - efficiencyImprovement * 0.4);
      const optimizedReworkCost = monthlyReworkCost * (1 - errorReduction);
      const optimizedCosts = optimizedLaborCost + optimizedReworkCost;
      
      const savings = currentCosts - optimizedCosts;
      const savingsPercentage = (savings / currentCosts) * 100;
      
      // ROI considerando inversión promedio de INSOLVA
      const averageInvestment = 150000; // Inversión promedio en consultoría
      const monthlyROI = (savings / averageInvestment) * 100;
      const yearlyROI = monthlyROI * 12;

      setResults({
        currentCosts,
        optimizedCosts,
        savings,
        savingsPercentage,
        monthlyROI,
        yearlyROI
      });
      
      setIsCalculating(false);
    }, 1500);
  };

  useEffect(() => {
    calculateSavings();
  }, [formData]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section id="calculadora" className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="container">
        {/* Header */}
        <div 
          ref={sectionAnimation.ref}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${sectionAnimation.className}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Calculadora de <span className="text-gradient">Ahorros</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Descubre cuánto puedes ahorrar optimizando los procesos de tu empresa con INSOLVA
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Datos de tu Empresa
              </h3>
              
              <div className="space-y-6">
                {/* Empleados */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Cantidad de Empleados: {formData.employees}
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="500"
                    value={formData.employees}
                    onChange={(e) => handleInputChange('employees', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span>5</span>
                    <span>500</span>
                  </div>
                </div>

                {/* Salario Promedio */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Salario Promedio Mensual: {formatCurrency(formData.avgSalary)}
                  </label>
                  <input
                    type="range"
                    min="50000"
                    max="200000"
                    step="5000"
                    value={formData.avgSalary}
                    onChange={(e) => handleInputChange('avgSalary', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span>$50.000</span>
                    <span>$200.000</span>
                  </div>
                </div>

                {/* Horas de Trabajo */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Horas de Trabajo Diarias: {formData.workingHours}
                  </label>
                  <input
                    type="range"
                    min="6"
                    max="12"
                    value={formData.workingHours}
                    onChange={(e) => handleInputChange('workingHours', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span>6hs</span>
                    <span>12hs</span>
                  </div>
                </div>

                {/* Porcentaje de Ineficiencia */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Ineficiencia Estimada: {formData.inefficiencyPercentage}%
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    value={formData.inefficiencyPercentage}
                    onChange={(e) => handleInputChange('inefficiencyPercentage', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span>10%</span>
                    <span>50%</span>
                  </div>
                </div>

                {/* Tasa de Errores */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tasa de Errores: {formData.errorRate}%
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={formData.errorRate}
                    onChange={(e) => handleInputChange('errorRate', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span>1%</span>
                    <span>20%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {isCalculating ? (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-insolva-600 mx-auto mb-4"></div>
                <p className="text-gray-600 dark:text-gray-400">Calculando tus ahorros potenciales...</p>
              </div>
            ) : results && (
              <div className="space-y-6">
                {/* Current vs Optimized */}
                <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Costos Actuales</h4>
                  <div className="text-3xl font-bold text-red-600 dark:text-red-400">
                    {formatCurrency(results.currentCosts)}/mes
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Incluye costos de ineficiencia y reprocesos
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Costos Optimizados</h4>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                    {formatCurrency(results.optimizedCosts)}/mes
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Después de implementar mejoras con INSOLVA
                  </p>
                </div>

                {/* Savings Highlight */}
                <div className="bg-gradient-to-br from-insolva-500 to-insolva-700 rounded-2xl p-8 text-white text-center">
                  <h4 className="text-xl font-semibold mb-2">Ahorro Mensual Potencial</h4>
                  <div className="text-4xl font-bold mb-2">
                    {formatCurrency(results.savings)}
                  </div>
                  <div className="text-lg opacity-90">
                    {results.savingsPercentage.toFixed(1)}% de reducción en costos
                  </div>
                </div>

                {/* ROI */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-insolva-600 dark:text-insolva-400">
                      {results.monthlyROI.toFixed(1)}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">ROI Mensual</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-insolva-600 dark:text-insolva-400">
                      {results.yearlyROI.toFixed(0)}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">ROI Anual</div>
                  </div>
                </div>

                {/* Ahorro Anual */}
                <div className="bg-gradient-to-br from-insolva-50 to-insolva-100 dark:from-insolva-900/20 dark:to-insolva-800/20 rounded-xl p-6">
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Proyección Anual</h5>
                  <div className="text-2xl font-bold text-insolva-600 dark:text-insolva-400">
                    {formatCurrency(results.savings * 12)}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Ahorro total en 12 meses
                  </p>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                ¿Quieres hacer realidad estos ahorros?
              </h4>
              <button 
                onClick={() => window.open(`https://wa.me/+5491234567890?text=Hola! Según la calculadora, mi empresa podría ahorrar ${results ? formatCurrency(results.savings) : ''} mensual. Me interesa una consulta.`, '_blank')}
                className="btn-primary w-full"
              >
                Solicitar Consulta Gratuita
              </button>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                * Los resultados son estimaciones basadas en datos promedio del sector
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;
