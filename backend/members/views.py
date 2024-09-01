

# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render ,redirect
from.models import UserDetails
from django.contrib.auth.hashers import check_password
from django.contrib.auth import authenticate,login
from django import forms
import json
from django.http import JsonResponse
def homepage(request):
    return render(request,"index.html")
def loginUser(request):
    if request.method == "POST":
        Username = request.POST.get('uname')
        password = request.POST.get("Password")
        print(Username,password)
        try:
            user_details = UserDetails.objects.get(uname=Username)
            if check_password(password, user_details.Password):
                # Authentication successful
                # Access user_details fields here
                return redirect('shop')
            else:
                # Password incorrect
                return render(request, 'login.html', {'error_message': 'Invalid password'})
        except UserDetails.DoesNotExist:
            # User with given username does not exist
            return render(request, 'login.html', {'error_message': 'User does not exist'})
    else:
        return render(request, 'login.html')
def shop(request):
    return render(request,"shop.html")
def contact(request):
    return render(request ,"contact.html")
def signup(request):
    if request.method == "POST":
        fname = request.POST.get("fname")
        lname = request.POST.get("lname")
        uname = request.POST.get("uname")
        email = request.POST.get("email")
        gender = request.POST.get("gender")
        address = request.POST.get("address")
    
        pass1 = request.POST.get("Password1")
        password = request.POST.get("Password2")

        if pass1 == password:
     
            new_user = UserDetails(fname=fname, lname=lname,uname=uname,email=email,gender=gender,address=address,Password=password)
            new_user.save()
      
            return redirect("login")
        else:
            raise forms.ValidationError("Passwords don't match")
    else:
        return render(request,'signup.html')
        
def privacy(request):
    return render(request,"privacy.html")
def terms(request):
    return render(request,"terms.html")
def about(request):
    return render(request,"about.html")
def cart(request):
    return render(request,"cart.html")
# views.py






def checkout(request):
    if request.method == 'POST':
        try:
            data = request.POST  # Assuming cart data is sent as form data
            # Process the checkout data (e.g., save order to database)
            # Adjust this according to your models and logic
            
            # Return a JSON response indicating success
            return JsonResponse({'success': True, 'message': 'Checkout successful!'})
            
        except Exception as e:
            # Return a JSON response indicating failure
            return JsonResponse({'success': False, 'error': str(e)}, status=500)

    # Return a JSON response indicating invalid request method
    return JsonResponse({'error': 'Invalid request method'}, status=405)
