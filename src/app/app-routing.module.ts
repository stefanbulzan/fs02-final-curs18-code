import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirstPageComponent} from "./pages/first-page/first-page.component";
import {SecondPageComponent} from "./pages/second-page/second-page.component";
import {ThirdPageComponent} from "./pages/third-page/third-page.component";
import {InvoicePageComponent} from "./pages/invoice-page/invoice-page.component";

const routes: Routes = [
  {path: "first", component: FirstPageComponent},
  {path: "second", component: SecondPageComponent},
  {path: "third", component: ThirdPageComponent},
  {path: "invoices", component: InvoicePageComponent},
  {path: "", redirectTo: "first", pathMatch: "full"},
  {path: "**", component: FirstPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
