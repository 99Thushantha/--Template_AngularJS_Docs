<?php
function tenancies($id)
{

function getAllCertificatesElectric($itemsPerPage, $pagenumber, $accountHolderID)  {

    $startFrom = ($pagenumber-1)*$itemsPerPage;

    $sql =  "SELECT * FROM (
               SELECT
               Tbl_Property.Property_name,
               Tbl_Property.Account_Holder_ID,
               Tbl_Property.Active as Property_Active,
               Tbl_Electric_Certificate_Details.Active as Electric_Cert_Active,
               Tbl_Electric_Certificate_Details.electric_record_id,
               Tbl_Electric_Certificate_Details.date_of_last_electric_inspection,
               DATE_ADD(Tbl_Electric_Certificate_Details.date_of_last_electric_inspection, INTERVAL 5 YEAR) as Expiration_Date
               FROM Tbl_Electric_Certificate_Details
               JOIN Tbl_Property ON Tbl_Property.Property_ID = Tbl_Electric_Certificate_Details.Property_ID
               WHERE Tbl_Property.Account_Holder_ID = :account_holder_id)
               as ElectricCertificates
              LIMIT $startFrom,$itemsPerPage ";



    try {
        $db = getDB();
        $stmt = $db->prepare($sql);
        $stmt->bindParam("account_holder_id", $accountHolderID);
        $stmt->execute();
        $tenants["data"] = $stmt->fetchAll(PDO::FETCH_OBJ);

        $db = null;
        echo json_encode($tenants);

    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}



?>