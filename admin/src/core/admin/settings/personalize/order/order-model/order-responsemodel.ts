/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
export class PersonalizeOrderResponseModel {
  public invoicePrefix: string;
  public orderStatus: number;

  constructor(Sitesettingresponse: any) {
    this.invoicePrefix = Sitesettingresponse.invoicePrefix || '';
    this.orderStatus = Sitesettingresponse.orderStatus || 0;
  }
}
