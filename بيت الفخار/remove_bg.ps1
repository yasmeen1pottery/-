Add-Type -AssemblyName System.Drawing
$path = "c:\Users\Win 10\Desktop\بيت الفخار\logo.png"
$newPath = "c:\Users\Win 10\Desktop\بيت الفخار\logo_transparent.png"
$img = [System.Drawing.Bitmap]::FromFile($path)

# Make white pixels transparent
$img.MakeTransparent([System.Drawing.Color]::White)

$img.Save($newPath, [System.Drawing.Imaging.ImageFormat]::Png)
$img.Dispose()
