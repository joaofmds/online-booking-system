export type ServiceData = {
  _id?: string;
  createdById: string;
  name: string;
  active?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  categoryId: string;
  duration: number;
  description?: string;
  productsQuantityNeeded?: number;
  productId?: string;
  promotionalPrice?: number;
  price?: number;
  finalPrice?: number;
  comission?: number;
  havePromotionalPrice?: boolean;
  hasFidelityGenerator?: boolean;
  generateHowManyPoints?: number;
  appointmentsTotal?: number;
  canPayWithFidelityPoints?: boolean;
  howManyPointsIsNeededToRescue?: number;
};

export type ServicePaginated = {
  service: ServiceData[];
  total: number;
};

export class ServiceEntity {
  createdById: string;
  name: string;
  active?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  categoryId: string;
  duration: number;
  description?: string;
  productsQuantityNeeded?: number;
  productId?: string;
  promotionalPrice?: number;
  price?: number;
  finalPrice?: number;
  comission?: number;
  havePromotionalPrice?: boolean;
  hasFidelityGenerator?: boolean;
  generateHowManyPoints?: number;
  appointmentsTotal?: number;
  canPayWithFidelityPoints?: boolean;
  howManyPointsIsNeededToRescue?: number;

  constructor(data: ServiceData) {
    this.createdById = data.createdById;
    this.name = data.name;
    this.active = false;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.categoryId = data.categoryId;
    this.duration = data.duration;
    this.description = data.description;
    this.productsQuantityNeeded = data.productsQuantityNeeded;
    this.productId = data.productId;
    this.promotionalPrice = data.promotionalPrice;
    this.price = data.price;
    this.finalPrice = data.finalPrice;
    this.comission = data.comission;
    this.havePromotionalPrice = data.havePromotionalPrice;
    this.hasFidelityGenerator = data.hasFidelityGenerator;
    this.generateHowManyPoints = data.generateHowManyPoints;
    this.appointmentsTotal = data.appointmentsTotal;
    this.canPayWithFidelityPoints = data.canPayWithFidelityPoints;
    this.howManyPointsIsNeededToRescue = data.howManyPointsIsNeededToRescue;
  }
}
