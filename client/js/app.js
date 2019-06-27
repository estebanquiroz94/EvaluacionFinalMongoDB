
class EventManager {
    constructor() {
        this.User = "jj"
        this.urlBase = "http://localhost:3701/api/"
        this.obtenerDataInicial()
        this.inicializarFormulario()
        this.guardarEvento()
    }

    actualizarEvento(evento){
      let urlEventos = this.urlBase + "Eventos/actualizar"

      let id = evento.id,
          start = moment(evento.start).format('YYYY-MM-DD HH:mm:ss'),
          end = moment(evento.end).format('YYYY-MM-DD HH:mm:ss'),
          form_data = new FormData(),
          start_date,
          end_date,
          start_hour,
          end_hour

      start_date = start.substr(0,10)
      end_date = end.substr(0,10)
      start_hour = start.substr(11,8)
      end_hour = end.substr(11,8)

      let ev = {
          id: id,
          start: start_date,
          start_hour: start_hour,
          end: end_date,
          end_hour: end_hour,
      }

      $.post(urlEventos, ev, (response) => {
          alert(response)
      })

    }

    inicializarCalendario(eventos) {
           $('.calendario').fullCalendar({
               header: {
                   left: 'prev,next today',
                   center: 'title',
                   right: 'month,agendaWeek,basicDay'
               },
               defaultDate: '2019-06-01',
               navLinks: true,
               editable: true,
               eventLimit: true,
               droppable: true,
               dragRevertDuration: 0,
               timeFormat: 'H:mm',
               eventDrop: (event) => {
                   this.actualizarEvento(event)
               },
               events: eventos,
               eventDragStart: (event,jsEvent) => {
                   $('.delete').find('img').attr('src', "img/trash-open.png");
                   $('.delete').css('background-color', '#a70f19')
               },
               eventDragStop: (event,jsEvent) => {
                   var trashEl = $('.delete');
                   var ofs = trashEl.offset();
                   var x1 = ofs.left;
                   var x2 = ofs.left + trashEl.outerWidth(true);
                   var y1 = ofs.top;
                   var y2 = ofs.top + trashEl.outerHeight(true);
                   if (jsEvent.pageX >= x1 && jsEvent.pageX<= x2 &&
                       jsEvent.pageY >= y1 && jsEvent.pageY <= y2) {
                           this.eliminarEvento(event)
                           $('.calendario').fullCalendar('removeEvents', event._id);
                       }
                   }
               })
           }

    obtenerDataInicial() {
        let urlEventos = this.urlBase + "Eventos/"

        $.ajax({
          url: urlEventos,
          type: "GET",
          data: {
            user: this.User
          },
          success : (eventos)=>{
            this.inicializarCalendario(eventos);
          },
          error: function(err){
          alert(err);
          }
        });
    }

    eliminarEvento(evento) {
        $.ajax({
          url: this.urlBase+'Eventos/eliminar',
          type: "GET",
          data: {
            idEvent: evento._id
          },
          success : (respuesta)=>{
            alert(respuesta.mensaje)
          },
          error: function(err){
          alert(err);
          }
        });

        $('.delete-btn').find('img').attr('src', "img/trash.png");
        $('.delete-btn').css('background-color', '#8B0913')
    }

    guardarEvento() {
        $('.addButton').on('click', (ev) => {
            ev.preventDefault()
            let nombre = $('#titulo').val(),
            start = $('#start_date').val(),
            title = $('#titulo').val(),
            end = '',
            start_hour = '',
            end_hour = '',
            all_day = 'S',
            user = this.User;

            if (!$('#allDay').is(':checked')) {
                end = $('#end_date').val()
                start_hour = $('#start_hour').val()
                end_hour = $('#end_hour').val()
                start = start + 'T' + start_hour
                end = end + 'T' + end_hour
                all_day = 'N'
            }
            let urlEventos = this.urlBase + "Eventos/"
            if (title != "" && start != "") {
                let ev = {
                    id: "1",
                    title: title,
                    start: start,
                    start_hour: start_hour,
                    end: end,
                    end_hour: end_hour,
                    all_day: all_day,
                    user: user
                }

                //Peticion a servidor para guardar información.
                $.post(urlEventos, ev, (response) => {
                  ev.id = response.id;
                    alert(response.mensaje)
                    $('.calendario').fullCalendar('renderEvent', ev)
                });

                $('#titulo').val("");
                $('#start_date').val("");
                $('#end_date').val("");
                $('#end_hour').val("");
                $('#start_hour').val("");

            } else {
                alert("Complete los campos obligatorios para el evento")
            }
        })
    }

    inicializarFormulario() {
        $('#start_date, #titulo, #end_date').val('');
        // $('#start_date, #end_date').datepicker({
        //     dateFormat: "yy-mm-dd"
        // });
        // $('.timepicker').timepicker({
        //     timeFormat: 'HH:mm:ss',
        //     interval: 30,
        //     minTime: '5',
        //     maxTime: '23:59:59',
        //     defaultTime: '',
        //     startTime: '5:00',
        //     dynamic: false,
        //     dropdown: true,
        //     scrollbar: true
        // });
        $('#allDay').on('change', function(){
            if (this.checked) {
                $('.timepicker, #end_date').attr("disabled", "disabled")
            }else {
                $('.timepicker, #end_date').removeAttr("disabled")
            }
        })
    }


    }

    const Manager = new EventManager()
