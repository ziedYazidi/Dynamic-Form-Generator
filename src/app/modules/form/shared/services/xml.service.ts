import { Injectable } from '@angular/core';
import {Field} from '../../../../models/field';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class XmlService {
  xml: any;

  constructor() { }
  // Create Text Area from File

  // getInputs(data: string): Field[] {
//     let inputs: Field[] = [];
//     this.xml = data;
//     var parser = new DOMParser();
//     var xmlDoc = parser.parseFromString(this.xml,"text/xml");
//     var json = this.xmlToJson(xmlDoc);
//     for(let ind in json) {
//       //keys must be strings
//       // if(typeof(this.json[ind]) != 'string') {
//       //   this.json[ind] = this.json[ind].join('\n');
//       // }
//       for(let element in json[ind]){
//         console.log("element", element);
//         console.log("json[ind]", json[ind]);
//         let _input: Field = {key:element,value:json[ind][element]};
//         inputs.push(_input);
//       }
//     }
//     return inputs;
//
//   }
//
//
//   // Changes XML to JSON
// // Modified version from here: http://davidwalsh.name/convert-xml-json
//    xmlToJson(xml) {
//
//     // Create the return object
//     var obj = {};
//
//     if (xml.nodeType == 1) { // element
//       // do attributes
//       if (xml.attributes.length > 0) {
//         obj["@attributes"] = {};
//         for (var j = 0; j < xml.attributes.length; j++) {
//           var attribute = xml.attributes.item(j);
//           obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
//         }
//       }
//     } else if (xml.nodeType == 3) { // text
//       obj = xml.nodeValue;
//     }
//
//     // do children
//     // If just one text node inside
//     if (xml.hasChildNodes() && xml.childNodes.length === 1 && xml.childNodes[0].nodeType === 3) {
//       obj = xml.childNodes[0].nodeValue;
//     }
//     else if (xml.hasChildNodes()) {
//       for(var i = 0; i < xml.childNodes.length; i++) {
//         var item = xml.childNodes.item(i);
//         var nodeName = item.nodeName;
//         if (typeof(obj[nodeName]) == "undefined") {
//           obj[nodeName] = this.xmlToJson(item);
//         } else {
//           if (typeof(obj[nodeName].push) == "undefined") {
//             var old = obj[nodeName];
//             obj[nodeName] = [];
//             obj[nodeName].push(old);
//           }
//           obj[nodeName].push(this.xmlToJson(item));
//         }
//       }
//     }
//     return obj;
//   }
//
// //  Create formGroup from TextAreas
//   toFormGroup(inputs: Field[]): FormGroup{
//     let group: any = [];
//     inputs.forEach(input => {
//       group[input.name] = new FormControl(input.value);
//     });
//     return new FormGroup(group);
//   }
}
