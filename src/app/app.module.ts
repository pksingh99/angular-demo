import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OpaqueToken } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SourceLinkGuard } from './guards/source-link.guard';
import { SourceLinkServiceService } from './services/source-link-service.service';
import { HomeComponent } from './pages/home/home.component';
import { HelloProxyComponent } from './hello-proxy/hello-proxy.component';
import { TemplateComponent } from './pages/template/template.component';
import { ComponentComponent } from './pages/component/component.component';
import { VeEmulateComponent, VeNativeComponent, VeNoneComponent } from './pages/component/components';
import { ColorfullComponent } from './pages/template/colorfull/colorfull.component';
import { BoxComponent } from './pages/template/box/box.component';
import { BoxHeaderDirective } from './pages/template/box/box-header.directive';
import { CustomerInfoComponent } from './pages/template/customer-info/customer-info.component';
import { DirectiveComponent } from './pages/directive/directive.component';
import { ColorfullHelloWorldDirective } from './pages/directive/directives/colorfull-hello-world.directive';
import { LogDirective } from './pages/directive/directives/log.directive';
import { ErrorbuttonDirective } from './pages/directive/directives/errorbutton.directive';
import { TemplateRefComponent } from './pages/component/components/template-ref/template-ref.component';
import { IterationComponentComponent } from './pages/component/components/iteration-component/iteration-component.component';
import { DynamicComponent } from './pages/component/components/dynamic/dynamic.component';
import { RepeatMeDirective } from './pages/component/components/directives/repeat-me.directive';
import { AlertComponent } from './pages/component/components/alert/alert.component';
import { ChangeMeComponent } from './pages/component/components/change-me/change-me.component';
import { ChangeMeComponentOnPush } from './pages/component/components/change-me-push/change-me.component';
import { ChangeMeComponentRef } from './pages/component/components/change-me-ref/change-me.component';
import { BuildInsComponent } from './pages/build-ins/build-ins.component';
import { MultiPipe } from './pages/build-ins/pipes/multi.pipe';
import { DiComponent } from './pages/di/di.component';
import { ChildComponent } from './pages/di/components/child/child.component';
import { TemplateDrivenComponent } from './pages/template-driven/template-driven.component';
import { RangeValidatorDirective } from './pages/template-driven/directives/range-validator.directive';
import { AsyncPostValidatorDirective } from './pages/template-driven/directives/async-post-validator.directive';

const ROUTES: Routes = [
  { path: '', component: HomeComponent, canActivate: [SourceLinkGuard] },
  { path: 'hello', component: HelloProxyComponent, canActivate: [SourceLinkGuard] },
  { path: 'template', component: TemplateComponent, canActivate: [SourceLinkGuard] },
  { path: 'directive', component: DirectiveComponent, canActivate: [SourceLinkGuard] },
  { path: 'component', component: ComponentComponent, canActivate: [SourceLinkGuard] },
  { path: 'buildin', component: BuildInsComponent, canActivate: [SourceLinkGuard] },
  { path: 'di', component: DiComponent, canActivate: [SourceLinkGuard] },
  { path: 'tp', component: TemplateDrivenComponent, canActivate: [SourceLinkGuard] }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelloProxyComponent,
    TemplateComponent,
    ColorfullComponent,
    BoxComponent,
    BoxHeaderDirective,
    CustomerInfoComponent,
    ComponentComponent,
    VeEmulateComponent, VeNativeComponent, VeNoneComponent,
    DirectiveComponent,
    ColorfullHelloWorldDirective,
    LogDirective,
    ErrorbuttonDirective,
    TemplateRefComponent,
    IterationComponentComponent,
    DynamicComponent,
    RepeatMeDirective,
    AlertComponent,
    ChangeMeComponent,
    ChangeMeComponentOnPush,
    ChangeMeComponentRef,
    BuildInsComponent,
    MultiPipe,
    DiComponent,
    ChildComponent,
    TemplateDrivenComponent,
    RangeValidatorDirective,
    AsyncPostValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    SourceLinkServiceService,
    SourceLinkGuard,
    { provide: 'DEMO-TOKEN', useValue: 'Value from Root.' }
  ],
  entryComponents: [
    ColorfullComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
