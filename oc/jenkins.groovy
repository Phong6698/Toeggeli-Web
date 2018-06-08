#!groovy
@Library('Autodeployment')
import ch.raiffeisen.zitsrvs.autodeployment.jenkins.pipeline.BuildEnvironment
import ch.raiffeisen.zitsrvs.autodeployment.jenkins.pipeline.ProdEnvironment
import ch.raiffeisen.zitsrvs.autodeployment.jenkins.pipeline.TestEnvironment
import ch.raiffeisen.zitsrvs.autodeployment.tfs.ChangeManagementClient
import ch.raiffeisen.zitsrvs.autodeployment.tfs.TfsClient

String projectNameDev = "rch-toeggeli-int" // OpenShift-Projektname für DEV-Umgebung
String projectNameSyt = "my-app-syt" // OpenShift-Projektname für SYT-Umgebung
String projectNameAbt = "my-app-abt" // OpenShift-Projektname für ABT-Umgebung
String projectNamePrd = "my-app-prd" // OpenShift-Projektname für PRD-Umgebung
String environmentNameDev = "INT" // Zu unserer besseren Orientierung
String environmentNameSyt = "SYT" // Zu unserer besseren Orientierung
String environmentNameAbt = "ABT" // Zu unserer besseren Orientierung
String environmentNamePrd = "PRD" // Zu unserer besseren Orientierung. Ausserdem wird dieses Stichwort beim Log-Parsing verwendet
int replicaCountDev = 1 // Gewünschte Anzahl Pods auf DEV
int replicaCountSyt = 1 // Gewünschte Anzahl Pods auf SYT
int replicaCountAbt = 1 // Gewünschte Anzahl Pods auf ABT
int replicaCountPrd = 1 // Gewünschte Anzahl Pods auf PRD
String bc = "frontend" // Build Config Name
String imgStream = "frontend" // Image Stream Name
String imageTag = "latest" // Image Tag Name
String dc = "frontend" // Deployment Config Name
String serviceName = "frontend" // Service Name

/*withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'my-jenkins-credentials-ID', usernameVariable: 'username', passwordVariable: 'password']]) {*/
/*    TfsClient tfsClient = new TfsClient(username, password)
    ChangeManagementClient managementClient = new ChangeManagementClient(tfsClient, this)*/

    BuildEnvironment buildEnvironment = new BuildEnvironment(projectNameDev, dc, imgStream, imageTag, replicaCountDev, environmentNameDev, serviceName, bc, tfsClient, this)
    buildEnvironment.build()
    buildEnvironment.verifyBuild()
    buildEnvironment.deploy()
    buildEnvironment.verifyDeployment()
/*    TestEnvironment sytEnvironment = new TestEnvironment(buildEnvironment, projectNameSyt, dc, imgStream, imageTag, replicaCountSyt, environmentNameSyt, serviceName, this)
    sytEnvironment.allEnvironmentSteps()
    TestEnvironment abtEnvironment = new TestEnvironment(sytEnvironment, projectNameAbt, dc, imgStream, imageTag, replicaCountAbt, environmentNameAbt, serviceName, this)
    abtEnvironment.allEnvironmentSteps()
    ProdEnvironment prdEnvironment = new ProdEnvironment(abtEnvironment, projectNamePrd, dc, imgStream, imageTag, replicaCountPrd, environmentNamePrd, serviceName, managementClient, this)
    prdEnvironment.allEnvironmentSteps(commitUrl)*/
/*
}*/
