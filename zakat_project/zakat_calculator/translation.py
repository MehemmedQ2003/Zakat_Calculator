from modeltranslation.translator import TranslationOptions, register
from .models import Category, Subcategory

@register(Category)
class CategoryTranslationOptions(TranslationOptions):
    fields = ('name', 'info')


@register(Subcategory)
class SubcategoryTranslationOptions(TranslationOptions):
    fields = ('name',)