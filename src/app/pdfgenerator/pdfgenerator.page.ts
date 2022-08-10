import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { File } from '@ionic-native/file/ngx';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-pdfgenerator',
  templateUrl: './pdfgenerator.page.html',
  styleUrls: ['./pdfgenerator.page.scss'],
})
export class PdfgeneratorPage implements OnInit {
  private downloadedFile;
  constructor(public navCtrl: NavController, private loader: LoadingController,private file: File, private http: HTTP) {
  }

  ngOnInit() {
  }




  downloadFile() {
    var url = "http://africau.edu/images/default/sample.pdf";
    this.http.sendRequest(url, { method: "get", responseType: "arraybuffer" }).then(
      httpResponse => {
        console.log("55","File dowloaded successfully")
        this.downloadedFile = new Blob([httpResponse.data], { type: 'application/pdf' });

        this.blobToBase64(this.downloadedFile).then()
        console.log("585",)
        alert("File Downloaded")

      }
    ).catch(err => {
      console.error("56",err);
    })
  }

  blobToBase64(blob) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }

  async writeFile() {
    if (this.downloadedFile == null) return;
    var filename = 'myDownloadedPdfFile3.pdf';
    await this.createFile(filename);
    await this.writeToFile(filename);
  }

  async createFile(filename) {
    alert("Somthing Wrong with file") //i am commenting here becouse getting issue in file storage
    return this.file.createFile(this.file.externalRootDirectory, filename, false).catch(err => {
      console.error("57",err);
    })
  }

  writeToFile(filename) {
    alert("Somthing Wrong with file") //i am commenting here becouse getting issue in file storage
    return this.file.writeFile(this.file.externalRootDirectory, filename, this.downloadedFile,
      { replace: true, append: false }).then(createdFile => {
      console.log("58",'File written successfully.');
      console.log(createdFile)
    }).catch(err => {
      console.error("59",err);
    });
  }

}
