from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100)
    info = models.TextField(default="")

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name_plural = "Categories"

class Subcategory(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='subcategories')
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return f"{self.category.name} -> {self.name}"
    
    class Meta:
        verbose_name_plural = "Subcategories"