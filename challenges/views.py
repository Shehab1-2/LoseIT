from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from .models import Challenge
import json

def get_all_challenges(request):
    challenges = list(Challenge.objects.values())
    return JsonResponse(challenges, safe=False)

@csrf_exempt
@require_http_methods(["POST"])
def add_challenge(request):
    data = json.loads(request.body)
    challenge = Challenge.objects.create(
        name=data['name'],
        description=data['description'],
        start_date=data['start_date'],
        end_date=data['end_date']
    )
    return JsonResponse({"id": challenge.id})

@csrf_exempt
@require_http_methods(["PUT"])
def update_challenge(request, id):
    try:
        challenge = Challenge.objects.get(id=id)
        data = json.loads(request.body)
        challenge.name = data['name']
        challenge.description = data['description']
        challenge.start_date = data['start_date']
        challenge.end_date = data['end_date']
        challenge.save()
        return JsonResponse({"message": "Challenge updated successfully"})
    except Challenge.DoesNotExist:
        return HttpResponse(status=404)

@csrf_exempt
@require_http_methods(["DELETE"])
def delete_challenge(request, id):
    try:
        challenge = Challenge.objects.get(id=id)
        challenge.delete()
        return JsonResponse({"message": "Challenge deleted successfully"})
    except Challenge.DoesNotExist:
        return HttpResponse(status=404)
