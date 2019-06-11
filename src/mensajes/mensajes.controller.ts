import { Controller, Post, Body, Get, Put, Delete } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto';

@Controller('mensajes')
export class MensajesController {
    @Post()
    create (@Body() createMensajeDto: CreateMensajeDto){
        return 'mensaje creado';
    }

    @Get()
    getAll () {
        return 'lista de mensajes';
    }

    @Put(':id')
    update(@Body() updateMensajeDto: CreateMensajeDto){
        return 'Mensaje Actualizado';
    }

    @Delete(':id')
    delete(){
        return 'Mensaje Eliminado';
    }

}
