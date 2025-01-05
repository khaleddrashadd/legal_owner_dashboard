import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

// console.log(Aura.components.button.colorScheme.light.root.secondary);
// console.log(Aura.components.select);
// console.log(Aura);

const primeVuePreset = definePreset(Aura, {
  primitive: {
    primary: {
      50: '#DEEAF2',
      100: '#CCDFEB',
      200: '#ACDCFF',
      300: '#7D99B3',
      400: '#0095FF',
      500: '#00609D',
      600: '#01376A',
      700: '#25215D'
    },
    secondary: {
      50: '#CEEFDB',
      100: '#DFF4F1',
      150: '#CCE9E4',
      200: '#6FD195',
      250: '#F2FAF8',
      300: '#55D236',
      400: '#00A98F',
      500: '#1B8354'
    },
    extended: {
      50: '#FFE6CC',
      100: '#FFF3B8',
      150: '#FFEBD7',
      200: '#FFD400',
      300: '#EF8B22',
      350: '#DE8944',
      400: '#D1803F'
    },
    danger: {
      50: '#F8E2E2',
      100: '#C40C0C',
      200: '#F1D2D4'
    },
    ivory: {
      50: '#FFFFFF',
      100: '#FAFAFA',
      200: '#EBEBEB',
      300: '#E0E0E4',
      400: '#C3C6CB',
      500: '#9DA4AE',
      600: '#959595',
      700: '#858793',
      800: '#767676',
      850: '#313131',
      900: '#565656',
      950: '#121212'
    }
  },
  semantic: {
    primary: {
      50: '#DEEAF2',
      100: '#CCDFEB',
      200: '#ACDCFF',
      300: '#7D99B3',
      400: '#0095FF',
      500: '#00609D',
      600: '#01376A',
      700: '#25215D'
    },

    colorScheme: {
      primary: {
        color: '{primary.500}',
        inverseColor: '{primary.0}',
        hoverColor: '{primary.600}',
        activeColor: '{primary.100}'
      },
      formField: {
        color: '{white.700}',
        borderColor: '{white.200}',
        disabledBackground: '{white.50}',
        focusBorderColor: '{primary.500}',
        fontSize: '1.6rem',
        paddingX: '0.8rem',
        paddingY: '0.8rem',
        invalidBorderColor: '{red.600}'
      },
      light: {
        button: {
          secondaryBackground: '{primary.50}'
        },
        surface: {
          50: '{primary.50}',
          100: '{primary.100}',
          200: '{primary.200}',
          300: '{primary.300}',
          400: '{primary.400}',
          500: '{primary.500}',
          600: '{primary.600}',
          700: '{primary.700}',
          800: '{primary.800}',
          900: '{primary.900}',
          950: '{primary.950}'
        }
      }
    }
  },
  components: {
    button: {
      root: {
        borderRadius: '0.8rem',
        focusRing: {
          width: '2.2rem'
        },
        label: {
          //fontWeight: '600',
          fontSize: '1.6rem'
        }
      },
      colorScheme: {
        light: {
          root: {
            primary: {
              background: '{primary.500}',
              activeBackground: '{primary.500}',
              hoverBackground: '{primary.500}',
              activeBorderColor: '{primary.500}'
            },
            secondary: {
              background: '{primary.50}',
              hoverBackground: '{primary.100}',
              activeBackground: '{primary.50}',
              activeColor: '{primary.200}',
              borderColor: 'transparent',
              hoverBorderColor: 'transparent'
            },
            danger: {
              background: '{red.600}',
              hoverBackground: '{red.500}',
              activeBackground: '{red.500}',
              activeColor: '{red.50}',
              borderColor: 'transparent',
              hoverBorderColor: 'transparent'
            }
          },
          outlined: {
            primary: { hoverBackground: 'transparent', activeBackground: 'transparent' }
          },
          text: {
            primary: { hoverBackground: 'transparent', activeBackground: 'transparent' }
          }
        }
      }
    },
    inputgroup: {
      addonColor: '{white.500}'
    },
    inputtext: {
      borderColor: '{ivory.200}',
      hoverBorderColor: '{ivory.400}',
      focusBorderColor: '{ivory.500}',
      placeholderColor: '{ivory.700}'
    },

    select: {
      placeholderColor: '{ivory.700}',
      clearIconColor: '{ivory.500}',
      borderRadius: '0.375rem',
      paddingX: '0.75rem',
      paddingY: '0.75rem',
      disabledColor: '{ivory.300}',
      borderColor: '{ivory.200}',
      hoverBorderColor: '{ivory.400}',
      focusBorderColor: '{ivory.500}',
      option: {
        focusBackground: '{secondary.100}',
        selectedFocusBackground: '{secondary.50}',
        selectedBackground: '{secondary.50}'
      }
    },
    checkbox: {
      width: '1.6rem',
      height: '1.6rem',
      iconSize: '1.6rem',
      iconDisabledColor: '{primary.0}',
      disabledBackground: '{white.200}',
      hoverBorderColor: '{white.500}'
    },
    radiobutton: {
      width: '1.5rem',
      height: '1.5rem',
      iconDisabledColor: '{white.200}',
      disabledBackground: '{white.50}',
      hoverBorderColor: '{white.500}',
      iconCheckedColor: '{secondary.400}',
      iconCheckedHoverColor: '{secondary.400}',
      checkedBackground: 'transparent',
      checkedHoverBackground: 'transparent'
    },
    toggleswitch: {
      root: {
        width: '4rem',
        height: '2.4rem'
      },
      colorScheme: {
        root: {
          checkedHoverBackground: '{primary.700}',
          background: '{white.300}',
          disabledBackground: '{white.200}',
          hoverBackground: '{white.300}'
        },
        handle: {
          disabledBackground: '{white.0}'
        }
      }
    },
    toast: {
      root: {
        width: '40%',

        borderWidth: '0rem'
      },
      content: {
        gap: '3rem'
      },
      icon: {
        size: '2.4rem'
      },
      colorScheme: {
        light: {
          error: {
            background: '{red.50}',
            color: '{red.700}',
            borderColor: '{red.50}'
          },
          warn: {
            background: '#FFF9EB',
            color: '#8A6100',
            borderColor: '#FFF9EB'
          },
          info: {
            background: '{primary.50}',
            color: '{primary.500}',
            borderColor: '{primary.50}'
          },
          success: {
            background: '{green.50}',
            color: '{green.500}',
            borderColor: '{green.50}'
          }
        }
      }
    },
    datepicker: {
      date: {
        color: '{white.700}',
        hoverColor: '{white.0}',
        hoverBackground: '{secondary.100}',
        selectedBackground: '{secondary.50}',
        selectedColor: '{white.0}'
      },
      selectMonth: {
        hoverColor: '{white.0}',
        hoverBackground: '{secondary.50}',
        color: '{white.500}'
      },
      selectYear: {
        hoverColor: '{white.0}',
        hoverBackground: '{secondary.50}',
        color: '{white.500}'
      },
      header: {
        borderColor: '{white.200}',
        color: '{white.700}'
      },
      panel: {
        borderColor: '{white.300}',
        fontSize: '1.6rem'
      },
      weekDay: {
        color: '{white.500}'
      },
      colorScheme: { light: { today: { background: 'transparent', color: '{white.700}' } } }
    },
    progressbar: {
      root: {
        background: '{ivory.400}',
        borderRadius: '8px',
        height: '0.25rem'
      },
      value: {
        background: '{secondary.400}',
        borderRadius: '4px'
      }
    },
    progressspinner: {
      root: {},

      colorScheme: {
        light: {
          root: {
            'color-1': '{secondary.400}',
            'color-2': '{secondary.400}',
            'color-3': '{secondary.400}',
            'color-4': '{secondary.400}'
          }
        }
      }
    }
  },
  directives: {
    tooltip: {
      colorScheme: {
        light: {
          root: {
            background: '{white.0}'
          }
        }
      }
    }
  }
});
export default primeVuePreset;
