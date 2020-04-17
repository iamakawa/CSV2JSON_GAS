function csv2json() {
  //書き込む対象のSpread Sheetを定義
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getActiveSheet();
  
  // 対象のCSVファイルが置かれているフォルダ名、ファイル名を定義
  var folderName = "data";
  var folders = DriveApp.getFoldersByName(folderName);

  //フォルダとファイルの検索
  while (folders.hasNext()) {
    var folder = folders.next();
    if (folder.getName() == folderName) {
      var files = folder.getFiles();
      while (files.hasNext()) {
        var file = files.next();
        var sheetName = file.getName();
        sheetName = sheetName.substr(0,sheetName.length-4);
        
        var sh = ss().getSheetByName(sheetName);
        if(sh == null)
        {
          ss.insertSheet(sheetName);
          sh = ss.getSheetByName(sheetName);
        }
        else
        {
          sh.clear()
        }
        
        //設定しないでShift_JISのままだと文字化けする
        var data = file.getBlob().getDataAsString("Shift_JIS"); 
        var csv = Utilities.parseCsv(data);
        //セルA1からCSVの内容を書き込んでいく
        sh.getRange(1,1,csv.length,csv[0].length).setValues(csv);
      }
      return;
    }
  }
}