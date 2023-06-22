gcloud functions deploy plp-search \
--gen2 \
--runtime=nodejs18 \
--region=us-central1 \
--source=. \
--entry-point=plp-searchGET \
--trigger-http \
--allow-unauthenticated \
--project=fnb-lab-71