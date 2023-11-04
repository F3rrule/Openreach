from django.db import models

# Create your models here.

class Table(models.Model):
    PONProjectID = models.IntegerField(default =0)
    MDFID = models.CharField( max_length=200)
    Exchange = models.CharField(max_length=50)
    PONNumber = models.CharField(max_length=15)
    
    def __str__(self):
        return self.Exchange +' '+ self.PONNumber
    

