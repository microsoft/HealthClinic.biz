Add-Type -Assembly 'System.IO.Compression.FileSystem'
$mainUrl = 'http://your_stress_web.azurewebsites.net/api/Band'


function CreateWebtile($url, $icon, $name)
{
    $file = Get-Content 'manifest.json' 
    $file = $file -replace 'REPLACEURL', $url
    $path = "$pwd\$name"
    if(Test-Path $path)
    {
        Remove-Item $path
    }
    $zip = [System.IO.Compression.ZipFile]::Open($path, [System.IO.Compression.ZipArchiveMode]::Create)
    $file | Out-File "$env:temp\temp.json" -Force -Encoding ascii
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, "$env:temp\temp.json", "manifest.json") | Out-Null
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, "$pwd\icons\$icon", "icons\tileIcon.png") | Out-Null
    $zip.Dispose()
}


CreateWebTile $mainUrl 'tileIcon.png' 'Nightscout.webtile'






