import { generateUUID, validateUUID } from './crm/domain/model/uuid';
import { DateTime } from './crm/domain/model/date-time';

const id = generateUUID();
console.log('UUID generado:', id);
console.log('¿Es válido?:', validateUUID(id));

const dt = new DateTime();
console.log('Fecha:', dt.toString());
console.log('Formateada:', dt.format());

const dt2 = new DateTime();
console.log('¿Son iguales?:', dt.equals(dt2));