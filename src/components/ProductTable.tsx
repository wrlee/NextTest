"use client"

import React from 'react';
import type { 
    ProductSheetType, 
    ProductType, 
    ProductSpecType, 
    SpecValueType, 
    ValueType 
} from '@/lib/types';
import { cn } from '@/lib/util';

interface ProductTableProps extends React.HTMLAttributes<HTMLDivElement> {
  productSheet: ProductSheetType;
  layout?: 'products-as-rows' | 'products-as-columns';
}

const ProductTable: React.FC<ProductTableProps> = ({ 
   productSheet, 
   layout  = "products-as-rows",
   ...props
}) => {
  const { products, specifications } = productSheet;

  // Helper to get the value for a product's spec
  const getSpecValue = (product: ProductType, specId: string): string | number | boolean | null => {
    const specValue = product.specs.find(s => s.specId === specId);
    if (!specValue) return null;
    return specValue.value;
  };

  return (
    <div className={cn(props.className, "max-w-full overflow-hidden")}>
      <div className="flex overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="sticky left-0 bg-white z-10 px-4 py-2 border">Product</th>
              {specifications.map(spec => (
                <th key={spec.id} className="px-4 py-2 border">
                  <div className="flex flex-col">
                    <span>{spec.name}</span>
                    {spec.Tooltip && (
                      <span className="text-xs text-gray-500">{spec.Tooltip}</span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td className="sticky left-0 bg-white z-10 px-4 py-2 border flex items-center gap-2">
                  {product.imageRef && (
                    <img src={product.imageRef} alt={product.name} className="h-8 w-8 rounded" />
                  )}
                  <span>{product.name}</span>
                </td>
                {specifications.map(spec => (
                  <td key={spec.id} className="px-4 py-2 border">
                    {getSpecValue(product, spec.id)?.toString() || '-'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
