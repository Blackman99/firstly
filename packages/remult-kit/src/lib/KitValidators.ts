import type { FieldRef } from 'remult'

// REMULT Convo Noam/Yoni, light required? :D
export class KitValidators {
  static notNullNotUndefined(entity: any, col: FieldRef<any, string>) {
    if (col.value == null || col.value == undefined) {
      throw new Error('Obligatoire!')
    }
  }
}
