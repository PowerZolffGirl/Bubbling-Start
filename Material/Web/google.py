from google_images_download import google_images_download

response = google_images_download.googleimagesdownload()

arguments = {"keywords":"새우깡,꼬깔콘,맛동산,포카칩,양파링", "limit":100, "print_urls":True}
paths = response.download(arguments)
print(paths)