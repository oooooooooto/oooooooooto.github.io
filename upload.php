<?php
$uploadFileDir = './uploaded_images/';
if (!is_dir($uploadFileDir)) {
    mkdir($uploadFileDir, 0755, true);  // ディレクトリがない場合は作成
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // ファイルが正しくアップロードされたか確認
    if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
        // アップロードされたファイル情報を取得
        $fileTmpPath = $_FILES['file']['tmp_name'];
        $fileName = $_FILES['file']['name'];
        $fileSize = $_FILES['file']['size'];
        $fileType = $_FILES['file']['type'];
        $fileNameCmps = explode(".", $fileName);
        $fileExtension = strtolower(end($fileNameCmps));

        // 許可されたファイル拡張子のリスト
        $allowedfileExtensions = array('jpg', 'gif', 'png', 'jpeg');

        if (in_array($fileExtension, $allowedfileExtensions)) {
            // 保存先ディレクトリを指定
            $uploadFileDir = './uploaded_images/';
            $dest_path = $uploadFileDir . $fileName;

            // ファイルを保存
            if (move_uploaded_file($fileTmpPath, $dest_path)) {
                echo 'ファイルは正常にアップロードされました。';
                // ファイルのパスをHTMLに表示するために保存
                echo '<img src="' . $dest_path . '" alt="アップロードされた画像">';
            } else {
                echo 'ファイルのアップロード中にエラーが発生しました。';
            }
        } else {
            echo 'このファイルタイプは許可されていません。';
        }
    } else {
        echo 'ファイルのアップロードに失敗しました。';
    }
}
?>
