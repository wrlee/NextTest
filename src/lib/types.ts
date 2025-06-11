type IdType = string;
type ProductSheetId = IdType;
type SpecId = IdType;
type ProductId = IdType;
type UserId = IdType;
type Timestamp = number;
type ImageRef = URL | string;

type ValueType = "currency" | "integer" | "float" | "text" | "boolean";

interface ProductSpecType {
	id: SpecId;
	name: string;
	suffix?: string; // String to suffix value display
	valueType: ValueType;
	Tooltip?: string;
	created: Timestamp;
	createdBy: UserId;
	updated: Timestamp;
	updatedBy: UserId;
}

interface SpecValueType {
	specId: SpecId;
	value: number|boolean|string;
}

interface ProductType {
	id: ProductId;
	name: string;
	imageRef?: string;
	specs: SpecValueType[]; // or Record<SpecId, SpecValueType>
	created: Timestamp;
	createdBy: UserId;
	updated: Timestamp;
	updatedBy: UserId;
}

interface ProductSheetType {
	id: ProductSheetId;
	description?: string;
	specifications: ProductSpecType[]; // or Record<ProductSpecId,ProductSpecType>
	products: ProductType[]; // or Record<ProductId, ProductType>
	created: Timestamp;
	createdBy: UserId;
	updated: Timestamp;
	updatedBy: UserId;
}

export type {
	ProductSheetId,
	SpecId,
	ProductId,
	UserId,
	Timestamp,
	ProductSheetType,
	ProductType,
	ProductSpecType,
	SpecValueType,
	ValueType,
//  ImageRef
};
