# challenges/tests.py

from django.test import TestCase, Client
from .models import Challenge

class ChallengeTestCase(TestCase):
    def setUp(self):
        self.client = Client()
        self.challenge = Challenge.objects.create(
            name="Test Challenge",
            description="Test Description",
            start_date="2024-01-01",
            end_date="2024-01-10"
        )

    def test_get_all_challenges(self):
        response = self.client.get('/challenges/')
        self.assertEqual(response.status_code, 200)

    def test_add_challenge(self):
        response = self.client.post('/challenges/add/', {
            "name": "New Challenge",
            "description": "This is a new challenge.",
            "start_date": "2024-01-01",
            "end_date": "2024-01-10"
        }, content_type='application/json')
        self.assertEqual(response.status_code, 200)

    def test_update_challenge(self):
        response = self.client.put(f'/challenges/{self.challenge.id}/', {
            "name": "Updated Challenge",
            "description": "Updated description.",
            "start_date": "2024-01-05",
            "end_date": "2024-01-15"
        }, content_type='application/json')
        self.assertEqual(response.status_code, 200)

    def test_delete_challenge(self):
        response = self.client.delete(f'/challenges/delete/{self.challenge.id}/')
        self.assertEqual(response.status_code, 200)
from django.test import TestCase

# Create your tests here.
