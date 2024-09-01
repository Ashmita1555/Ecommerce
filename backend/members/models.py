from django.db import models
from django.contrib.auth.hashers import make_password

class UserDetails(models.Model):
    fname= models.CharField(max_length=255)
    lname = models.CharField(max_length=255)
    uname = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    gender = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    Password = models.CharField(max_length=255)
    joined_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.uname

    def save(self, *args, **kwargs):
        if not self.pk:  # If the object is being created
            self.Password = make_password(self.Password)  # Hash the password before saving
        super().save(*args, **kwargs)


