/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import 'reflect-metadata';
import {IsNotEmpty} from 'class-validator';

export class CreatePage {

    @IsNotEmpty({
        message: 'title is required',
    })
    public title: string;

    @IsNotEmpty({
        message: 'content is required',
    })
    public content: string;

    @IsNotEmpty()
    public active: number;

    public metaTagTitle: string;

    public metaTagContent: string;

    public metaTagKeyword: string;
}
