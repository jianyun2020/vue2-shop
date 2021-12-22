import requests from './requests'

export const reqgetCategoryList = () => requests.get(`/product/getBaseCategoryList`)