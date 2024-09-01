from django.contrib import admin
from django.urls import path
from members import views
urlpatterns = [
   

    path('',views.homepage,name="home"),
    path('login/',views.loginUser,name ="login"),
    
    path('contact/',views.contact,name="contact"),
    path('signup/',views.signup,name="signup"),
    path('privacy/',views.privacy ,name="privacy"),
    path('shop/',views.shop,name="shop"),
    path('terms/',views.terms,name="terms"),
    path('about/',views.about,name="about"),
    path('cart/',views.cart,name="cart"),
    path('checkout/', views.checkout, name="checkout"),
    
]

