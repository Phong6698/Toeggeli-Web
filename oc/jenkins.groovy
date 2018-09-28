#!groovy
@Library('Autodeployment')
import ch.raiffeisen.zitsrvs.autodeployment.jenkins.pipeline.BuildEnvironment

String projectNameDev = "rch-toeggeli-int" // OpenShift-Projektname für DEV-Umgebung
String environmentNameDev = "INT" // Zu unserer besseren Orientierung
int replicaCountDev = 1 // Gewünschte Anzahl Pods auf DEV
String bc = "toeggeli-web" // Build Config Name
String imgStream = "toeggeli-web" // Image Stream Name
String imageTag = "latest" // Image Tag Name
String dc = "toeggeli-web" // Deployment Config Name
String serviceName = "toeggeli-web" // Service Name


    BuildEnvironment buildEnvironment = new BuildEnvironment(projectNameDev, dc, imgStream, imageTag, replicaCountDev, environmentNameDev, serviceName, bc, null, this)
    buildEnvironment.build()
    buildEnvironment.verifyBuild()
    buildEnvironment.deploy()
    buildEnvironment.verifyDeployment()

