from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from .models import Challenge
import json

def get_all_challenges(request):
    challenges = list(Challenge.objects.values())
    return JsonResponse(challenges, safe=False, status=200)

@csrf_exempt
@require_http_methods(["POST"])
def add_challenge(request):
    try:
        data = json.loads(request.body)
        challenge = Challenge.objects.create(
            name=data.get('name'),
            description=data.get('description'),
            start_date=data.get('start_date'),
            end_date=data.get('end_date')
        )
        return JsonResponse({"id": challenge.id}, status=201)
    except KeyError as e:
        return JsonResponse({"error": f"Missing field: {str(e)}"}, status=400)

@csrf_exempt
@require_http_methods(["PUT"])
def update_challenge(request, id):
    try:
        challenge = Challenge.objects.get(id=id)
        data = json.loads(request.body)
        challenge.name = data.get('name', challenge.name)
        challenge.description = data.get('description', challenge.description)
        challenge.start_date = data.get('start_date', challenge.start_date)
        challenge.end_date = data.get('end_date', challenge.end_date)
        challenge.save()
        return JsonResponse({"message": "Challenge updated successfully", "challenge": {
            "id": challenge.id,
            "name": challenge.name,
            "description": challenge.description,
            "start_date": challenge.start_date,
            "end_date": challenge.end_date
        }}, status=200)
    except Challenge.DoesNotExist:
        return JsonResponse({"error": "Challenge not found"}, status=404)
    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid JSON"}, status=400)

@csrf_exempt
@require_http_methods(["DELETE"])
def delete_challenge(request, id):
    try:
        challenge = Challenge.objects.get(id=id)
        challenge.delete()
        return JsonResponse({"message": "Challenge deleted successfully"}, status=200)
    except Challenge.DoesNotExist:
        return JsonResponse({"error": "Challenge not found"}, status=404)
@csrf_exempt
@require_http_methods(["GET"])
def get_challenge_by_id(request, id):
    try:
        challenge = Challenge.objects.get(id=id)
        return JsonResponse({
            "id": challenge.id,
            "name": challenge.name,
            "description": challenge.description,
            "start_date": challenge.start_date,
            "end_date": challenge.end_date
        }, status=200)
    except Challenge.DoesNotExist:
        return JsonResponse({"error": "Challenge not found"}, status=404)