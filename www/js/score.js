/**
 * Created by jeton on 6.12.15.
 */
var Score = {
    submitted: false,
    list: {},
    save: function(name, score){
        this.list[name] = score;
        localStorage.setItem("scores", JSON.stringify(this.list));
        Score.submitted = true;
    },
    showAll: function(){
        var scores = JSON.parse(localStorage.getItem("scores"));
        var tbl = '';
        for(var score in scores){
            tbl +='<tr> <td>'+score+'</td> <td>'+scores[score]+'</td></tr>';
        }
        $('#tblScores').html(tbl);
    }
};