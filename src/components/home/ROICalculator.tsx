import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { colors } from '../../utils/colors';

const ROICalculator: React.FC = () => {
    const { t } = useTranslation();

    // State for the sliders
    const [leads, setLeads] = useState(100);
    const [conversionRate, setConversionRate] = useState(2);
    const [avgValue, setAvgValue] = useState(1000);

    // Simple calculation logic for demonstration
    // Assuming AI increases leads by 40% and conversion rate by 30% relative
    const newLeads = Math.round(leads * 1.4);
    const newConversionRate = conversionRate * 1.3;

    const currentRevenue = Math.round(leads * (conversionRate / 100) * avgValue);
    const projectedRevenue = Math.round(newLeads * (newConversionRate / 100) * avgValue);
    const additionalRevenue = projectedRevenue - currentRevenue;

    // Assuming AI saves 2 hours per lead processed
    const hoursSavedWeekly = Math.round(leads * 0.5);

    return (
        <motion.div
            className="relative rounded-3xl border border-white/10 bg-gray-900/40 p-8 overflow-hidden backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            {/* Background glow for the glassmorphism */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px] -z-10" />

            <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10">
                    <Calculator className="text-blue-400" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Calculateur de ROI Interactif
                    </h3>
                    <p className="text-sm text-gray-400">Découvrez l'impact de l'IA sur votre entreprise</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Sliders (Inputs) */}
                <div className="space-y-8">
                    {/* Leads Slider */}
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-medium text-gray-300">Leads mensuels actuels</label>
                            <span className="text-blue-400 font-mono">{leads}</span>
                        </div>
                        <input
                            type="range"
                            min="10" max="1000" step="10"
                            value={leads}
                            onChange={(e) => setLeads(Number(e.target.value))}
                            className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                        />
                    </div>

                    {/* Conversion Slider */}
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-medium text-gray-300">Taux de conversion (%)</label>
                            <span className="text-blue-400 font-mono">{conversionRate}%</span>
                        </div>
                        <input
                            type="range"
                            min="0.5" max="20" step="0.5"
                            value={conversionRate}
                            onChange={(e) => setConversionRate(Number(e.target.value))}
                            className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                        />
                    </div>

                    {/* Value Slider */}
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-medium text-gray-300">Valeur moyenne par client (€)</label>
                            <span className="text-blue-400 font-mono">{avgValue} €</span>
                        </div>
                        <input
                            type="range"
                            min="100" max="10000" step="100"
                            value={avgValue}
                            onChange={(e) => setAvgValue(Number(e.target.value))}
                            className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                        />
                    </div>
                </div>

                {/* Results */}
                <div className="bg-gray-950/50 rounded-2xl p-6 border border-white/5 space-y-6 flex flex-col justify-center relative overflow-hidden">
                    {/* subtle animated scanline */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[200%] animate-[scan_4s_linear_infinite]" />

                    <div className="relative z-10 flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-green-500/20 text-green-400">
                            <TrendingUp size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 mb-1">Croissance CA Mensuelle (Estimée)</p>
                            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                                +{additionalRevenue.toLocaleString('fr-FR')} €
                            </div>
                        </div>
                    </div>

                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    <div className="relative z-10 flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                            <Clock size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 mb-1">Temps sauvé par semaine</p>
                            <div className="text-3xl font-bold text-white">
                                ~{hoursSavedWeekly}h
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ROICalculator;
