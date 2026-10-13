import { ComparisonBottle } from '../types.ts';

export const COMPARISON_BOTTLES: ComparisonBottle[] = [
  {
    id: 'standard-insulated',
    name: 'Classic Double-Wall Stainless Steel',
    category: 'Traditional Reusable',
    techType: 'Passive Vacuum Insulation (No Electronics)',
    capacity: '710 ml (24 oz)',
    batteryLife: 'N/A (No battery required)',
    chargingType: 'None',
    weightEmpty: '380 g',
    insulation: '24 hrs Cold / 12 hrs Hot',
    bestFor: 'Everyday campus carry, budget-conscious users who wash bottles daily with warm soapy water',
    keyLimitation: 'Susceptible to rapid musty bacterial odor and slime build-up if left unwashed for 24+ hours'
  },
  {
    id: 'entry-uvc-lightweight',
    name: 'Compact UV-C Single-Wall Bottle',
    category: 'Portable Electronic',
    techType: '275 nm UV-C LED in Cap',
    capacity: '500 ml (17 oz)',
    batteryLife: 'Up to 14 days (3-4 cycles daily)',
    chargingType: 'Micro-USB with silicone port plug',
    weightEmpty: '290 g',
    insulation: 'None (Single-wall lightweight stainless steel)',
    bestFor: 'Ultralight backpackers and gym commuters who prioritize low pack weight over temperature control',
    keyLimitation: 'Condensation on outer shell; single-wall design does not keep iced water chilled through hot afternoons'
  },
  {
    id: 'premium-thermal-uvc',
    name: 'Pro Thermal UV-C Smart Bottle',
    category: 'Self-Cleaning Thermal',
    techType: 'Dual-LED 265–275 nm UV-C + Auto Pulse Every 2h',
    capacity: '750 ml (25 oz)',
    batteryLife: 'Up to 30 days (Normal Auto-Clean Mode)',
    chargingType: 'Magnetic Pogo-Pin (IPX7 waterproof)',
    weightEmpty: '495 g',
    insulation: '24 hrs Cold / 14 hrs Hot',
    bestFor: 'Travellers, busy professionals, and fitness enthusiasts wanting odor-free water and all-day thermal insulation',
    keyLimitation: 'Heavier empty weight; cap electronics require careful hand-wiping rather than harsh dishwasher cycles'
  },
  {
    id: 'outdoor-filtration-press',
    name: 'Hollow-Fiber Physical Filter Bottle',
    category: 'Outdoor Physical Filter',
    techType: '0.1 Micron Hollow Fiber Cartridge + Carbon',
    capacity: '650 ml (22 oz)',
    batteryLife: 'N/A (Mechanical pressure filtration)',
    chargingType: 'None',
    weightEmpty: '430 g',
    insulation: 'Mild (Single-wall BPA-free polymer)',
    bestFor: 'Backcountry wilderness hiking where stream water contains sediment, dirt, protozoa, and silt',
    keyLimitation: 'Filter cartridges require periodic replacement; requires physical sipping or plunge force; does not prevent bacterial odor in stored water'
  }
];

export const BUYING_CHECKLIST = [
  {
    title: 'Wavelength Accuracy (260–280 nm)',
    detail: 'Ensure the bottle utilizes genuine germicidal UV-C LEDs within the peak nucleic acid absorption range (260–280 nm), rather than cheaper decorative violet or blue LEDs (385–405 nm) that do not break microbial DNA.'
  },
  {
    title: 'Optical Tilt Safety Sensor',
    detail: 'Look for built-in gyroscopic or tilt sensors that shut off the UV-C LED instantly whenever the cap is removed or angled upwards, shielding your eyes and skin from direct ultraviolet exposure.'
  },
  {
    title: 'Magnetic or Waterproof Charging Interface',
    detail: 'Caps equipped with magnetic contact pins or IPX7-sealed ports eliminate rubber plug fatigue, preventing moisture from leaking into internal lithium batteries during hand washing.'
  },
  {
    title: 'Food-Grade Stainless Steel Body',
    detail: 'Premium 18/8 (304) or 316-grade electropolished interior steel reflects UV-C rays throughout the water column, enhancing germicidal coverage while resisting corrosion and staining.'
  },
  {
    title: 'Understand Physical Filtration Boundaries',
    detail: 'Remember that UV-C sanitizes clear water by neutralizing bacteria and viruses; it cannot remove sand, microplastics, chlorine, lead, or dissolved chemical contaminants.'
  }
];
