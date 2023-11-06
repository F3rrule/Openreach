from rest_framework import serializers
from .models import Table

class ReactSerializer (serializers.ModelSerializer):
    class Meta:
        model = Table
        fields = ('id', 'PONProjectID', 'Exchange', 'MDFID', 'PONNumber')

