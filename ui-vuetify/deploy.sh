#!/usr/bin/env bash

gsutil -m rm -ar 'gs://fnb-lab71/*' 
cd ./.dist && gsutil -m cp -r ./ gs://fnb-lab71
gsutil ls gs://fnb-lab71/