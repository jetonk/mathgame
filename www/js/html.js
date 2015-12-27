/**
 * Created by jeton on 6.12.15.
 */
var HTML = {
    popup: function(){
        $('#playerName').val('');
        $('#exit').hide();
        $('#normal').show();
        $('.btn-submit-score').show();
        $('#appModal').modal('show');
    },
    popupExit: function(){
        $('#playerName').val('');
        $('.modal-title').text('Save your score before exit?');
        $('#normal').hide();
        $('.btn-submit-score').hide();
        $('#exit').show();
        $('#appModal').modal('show');
    },
    reset: function(){
        $('.panel-body').removeClass('correct-ans').removeClass('wrong-ans');
        $('.correct').hide();
        $('.wrong').hide();
    }
};