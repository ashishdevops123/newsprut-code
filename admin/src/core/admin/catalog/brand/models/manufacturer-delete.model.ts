/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
export class ManufacturerDeleteModel {
  public manufacturerId: number;

  constructor(manufacturerdeleteForm: any) {
    this.manufacturerId = manufacturerdeleteForm.manufacturerId || '';
  }
}
