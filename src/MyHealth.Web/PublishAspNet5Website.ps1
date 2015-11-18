param($websiteName, $packOutput)

$website = Get-AzureWebsite -Name $websiteName

Stop-AzureWebsite -Name $websiteName

# get the scm url to use with MSDeploy.  By default this will be the second in the array
$msdeployurl = $website.EnabledHostNames[1]


$publishProperties = @{'WebPublishMethod'='MSDeploy';
                        'MSDeployServiceUrl'=$msdeployurl;
                        'DeployIisAppPath'=$website.Name;
                        'Username'=$website.PublishingUsername;
                        'Password'=$website.PublishingPassword}


$publishScript = "${env:ProgramFiles(x86)}\Microsoft Visual Studio 14.0\Common7\IDE\Extensions\Microsoft\Web Tools\Publish\Scripts\default-publish.ps1"


. $publishScript -publishProperties $publishProperties  -packOutput $packOutput

 Start-AzureWebsite -Name $websiteName