:: Node 8
oc import-image my-rhscl/nodejs-8-rhel7 --from=registry.access.redhat.com/rhscl/nodejs-8-rhel7 --confirm --reference-policy=local -n rch-toeggeli-abt
oc import-image my-rhscl/nodejs-8-rhel7 --from=registry.access.redhat.com/rhscl/nodejs-8-rhel7 --confirm --reference-policy=local -n rch-toeggeli-prd

:: DEV
oc delete all -l app=frontend -n rch-toeggeli-abt --force=true
oc create -f imageStream.yaml -n rch-toeggeli-abt
oc create -f bc.yaml -n rch-toeggeli-abt
oc start-build frontend -n rch-toeggeli-abt --wait
oc create -f dc-dev.yaml -n rch-toeggeli-abt
oc rollout latest heroes -n rch-toeggeli-abt
oc create -f service.yaml -n rch-toeggeli-abt
oc create -f route.yaml -n rch-toeggeli-abt

:: PRD
oc delete all -l app=frontend -n rch-toeggeli-prd --force=true
oc create -f imageStream.yaml -n rch-toeggeli-prd
oc tag rch-toeggeli-abt/frontend:latest rch-toeggeli-prd/frontend:latest
oc create -f dc-prd.yaml -n rch-toeggeli-prd
oc rollout latest heroes -n rch-toeggeli-prd
oc create -f service.yaml -n rch-toeggeli-prd
oc create -f route.yaml -n rch-toeggeli-prd
