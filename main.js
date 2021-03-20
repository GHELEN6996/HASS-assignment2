<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://d3js.org/d3.v6.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>    <meta charset="UTF-8">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Victims of Selected Major Offences (by Age Group)</title>
    <link rel="stylesheet" href="css style.css">
</head>
<body>
    <div class="container">
        <div class="table-responsive">
            <h1 id="web title">
                Victims of Selected Major Offences dash board
            </h1>
           
            <div>
                <button type="button" name="load_data" id="load_data" class="btn btn-info">
                    load_data
            </button>

            </div id="table">


        </div>
    </div>

    <table>
        

    </table>
<script>
$(document).ready(function(){
    $('#load_data').click(function(){
        $.ajax({
            url: "test.csv",
            dataType:"text",
        })
    })
}
)
</script>
