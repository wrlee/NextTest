//import React from 'react';
import ProductTable from '@/components/ProductTable'
import { 
    ProductSheetId,
    ProductSheetType, 
    ProductSpecType, 
    ProductType 
} from '@/lib/types';

interface PageProps {
  // Define any props your page component might accept here
}

const NOW = Date.now();

const specs: ProductSpecType[] = [
    { id: 'spec-1', name: 'Brand', valueType: 'text', created: NOW, createdBy: 'UserId', updated: NOW, updatedBy: 'UserId'}, 
    { id: 'spec-2', name: 'Model', valueType: 'text', created: NOW, createdBy: 'UserId', updated: NOW, updatedBy: 'UserId'},
    { id: 'spec-3', name: 'Resolution', valueType: 'integer', suffix: 'px', created: NOW, createdBy: 'UserId', updated: NOW, updatedBy: 'UserId'},
];
const products: ProductType[] = [
    { id: 'product-1', name: 'TV 1', specs: [{ specId: 'spec-1', value: 'Sony' }, { specId: 'spec-2', value: 'Bravia' }, { specId: 'spec-3', value: 1920 }], created: NOW, createdBy: 'UserId', updated: NOW, updatedBy: 'UserId'},
    { id: 'product-2', name: 'TV 2', specs: [{ specId: 'spec-1', value: 'Samsung' }, { specId: 'spec-2', value: 'Smart TV' }, { specId: 'spec-3', value: 2560 }], created: NOW, createdBy: 'UserId', updated: NOW, updatedBy: 'UserId'},  
];

const productSheet:ProductSheetType = {
	id: 'product-sheet-1',
	description: 'A comparison of TVs',
	specifications: specs, // or Record<ProductSpecId,ProductSpecType>
	products, // or Record<ProductId, ProductType>
	created: NOW,
	createdBy: 'UserId',
	updated: NOW,
	updatedBy: 'UserId',
}

const Page = (props: PageProps) => {
 
  return (
    <div>
      <ProductTable 
        className="w-half overflow-hidden bg-red"
        productSheet={productSheet} 
      />
    </div>
  );
};

export default Page;
