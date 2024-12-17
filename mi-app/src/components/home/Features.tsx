import React from 'react';
import { Zap, Shield, Star } from 'lucide-react';

const features = [
  {
    name: 'Fast Performance',
    description: 'Built with modern technologies for optimal speed.',
    icon: Zap,
  },
  {
    name: 'Secure by Default',
    description: 'Security best practices implemented from the ground up.',
    icon: Shield,
  },
  {
    name: 'Feature Rich',
    description: 'Packed with all the features you need to succeed.',
    icon: Star,
  },
];

export function Features() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-indigo-600">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.name}</h3>
              <p className="mt-2 text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}