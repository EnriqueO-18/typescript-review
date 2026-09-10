import { generateUUID, validateUUID } from './crm/domain/model/uuid';
import { DateTime } from './crm/domain/model/date-time';
import { Currency } from './crm/domain/model/currency';

const id = generateUUID();
console.log('UUID generado:', id);
console.log('¿Es válido?:', validateUUID(id));

const dt = new DateTime();
console.log('Fecha:', dt.toString());
console.log('Formateada:', dt.format());

const dt2 = new DateTime();
console.log('¿Son iguales?:', dt.equals(dt2));

const price = new Currency('USD');
console.log('Moneda:', price.code);
console.log('Formateado:', price.formatAmount(1500.5));