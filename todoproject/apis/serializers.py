from rest_framework import serializers
from todos import models
class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'content',
            'date',
        )
        model = models.Todo