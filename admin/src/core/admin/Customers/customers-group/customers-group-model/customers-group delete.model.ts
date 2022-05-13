/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
export class CustomersGroupDelete {
  public groupId: number;
  public id: number;

  constructor(customersGroupDelete: any) {
    this.groupId = customersGroupDelete.groupId || '';
    this.id = customersGroupDelete.id || '';
    if (customersGroupDelete.groupId) {
      this.id = customersGroupDelete.groupId || '';
    }
  }
}
