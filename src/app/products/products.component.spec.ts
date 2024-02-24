import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  //fakes
  const fakeProduct = {id: 0, name:'new product'}
  const fakeDataService = {
    products: {},
    getProducts: () => [fakeProduct],
    createProduct: () => {}
  } as any;

  beforeEach(() => {
    component = new ProductsComponent({},fakeDataService);
  });

  it(`should have a component`, () => {
    expect(component).toBeTruthy();
  });

  it(`should have a title`, () => {
    expect(component.title).toBe("Products");
  });

  it(`should have list of products`,()=>{
    component.ngOnInit();
    expect(component.products).toEqual([fakeProduct]);
  })

});
