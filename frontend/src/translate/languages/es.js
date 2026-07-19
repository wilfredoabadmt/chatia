const messages = {
  es: {
    translations: {

      signup: {
        title: "Registrarse",
        toasts: {
          success: "¡Usuario creado con éxito! ¡Inicia sesión!.",
          fail: "Error al crear el usuario. Comprueba los datos introducidos.",
          userCreationDisabled: "El registro de nuevos usuarios está deshabilitado.",
          verificationError: "Error al verificar permisos de registro.",
        },
        form: {
          name: "Nombre",
          email: "Correo electrónico",
          password: "Contraseña",
          company: "Nombre de la Organización",
          phone: "Whatsapp (Código de área + NÚMERO)",
          plan: "Plan",
          planDetails: {
            attendants: "Agentes",
            whatsapp: "WhatsApp",
            queues: "Colas",
            currency: "€",
          },
        },
        buttons: {
          submit: "Registrarse",
          login: "¿Ya tienes una cuenta? ¡Inicia sesión!"
        }
      },
      validation: {
        tooShort: "¡Muy corto!",
        tooLong: "¡Muy largo!",
        required: "Obligatorio",
        invalidEmail: "Correo electrónico inválido",
      },
      login: {
        title: "Iniciar Sesión",
        logoAlt: "Logo",
        emailLabel: "Correo electrónico",
        passwordLabel: "Contraseña",
        rememberMe: "Recordarme",
        loginButton: "Iniciar Sesión",
        signupButton: "Regístrate",
        noAccount: "¿No tienes una cuenta?",
        forgotPassword: "¿Olvidaste la contraseña?",
        whatsappLabel: "Chatea con nosotros en WhatsApp",
        whatsappTitle: "Chatea con nosotros en WhatsApp",
        form: {
          email: "Correo electrónico",
          password: "Contraseña",
          button: "Acceder"
        },
        buttons: {
          submit: "Iniciar Sesión",
          register: "¿No tienes una cuenta? ¡Regístrate!"
        }
      },
      companies: {
        title: "Empresas",
        form: {
          name: "Nombre de la Empresa",
          plan: "Plan",
          token: "Token",
          submit: "Registrar",
          success: "¡Empresa creada con éxito!"
        }
      },
      auth: {
        toasts: {
          success: "¡Inicio de sesión realizado con éxito!"
        },
        dueDate: {
          expiration: "Tu suscripción vence en",
          days: "¡días!",
          day: "¡día!",
          expirationToday: "¡Tu suscripción vence hoy!"
        },
        token: "Token"
      },
      forgotPassword: {
        title: "Restablecer Contraseña",
        form: {
          emailLabel: "Ingresa tu correo electrónico",
          submitButton: "Enviar Enlace de Restablecimiento",
          backToLogin: "Volver al Inicio de Sesión",
        },
        loading: {
          sending: "Enviando...",
          sent: "¡Enviado!",
        },
        toasts: {
          success: "Enlace de restablecimiento de contraseña enviado con éxito",
        },
      },
      resetPassword: {
        title: "Restablecer Contraseña",
        form: {
          newPassword: "Nueva Contraseña",
          confirmPassword: "Confirmar Contraseña",
        },
        buttons: {
          submit: "Restablecer Contraseña",
          submitting: "Restableciendo...",
          submitted: "¡Restablecido!",
          backToLogin: "Volver al Inicio de Sesión",
        },
        errors: {
          passwordMismatch: "Las contraseñas no coinciden",
          passwordTooShort: "La contraseña debe tener al menos 6 caracteres",
          invalidToken: "El token de restablecimiento está ausente o es inválido. Por favor, solicita un nuevo enlace de restablecimiento.",
          resetError: "Error al restablecer la contraseña. Inténtalo de nuevo.",
        },
        toasts: {
          success: "Contraseña restablecida con éxito",
          passwordMismatch: "Las contraseñas no coinciden",
          passwordTooShort: "La contraseña debe tener al menos 6 caracteres",
        },
      },
      financeiro: {
        title: "Facturas",
        table: {
          details: "Detalles",
          users: "Usuarios",
          connections: "Conexiones",
          queues: "Colas",
          value: "Valor",
          dueDate: "Vencimiento",
          status: "Estado",
          action: "Acción"
        },
        tooltips: {
          details: "Detalles de la factura",
          users: "Número de usuarios",
          connections: "Número de conexiones",
          queues: "Número de colas",
          value: "Valor de la factura",
          dueDate: "Fecha de vencimiento"
        },
        status: {
          paid: "Pagado",
          overdue: "Vencido",
          open: "Abierto",
          yes: "Sí",
          no: "No",
          overdueFor: "Vencido hace {{days}} días",
          dueToday: "Vence hoy",
          dueIn: "Vence en {{days}} días"
        },
        buttons: {
          pay: "PAGAR",
          paid: "PAGADO",
          payNow: "PAGAR AHORA"
        },
        checkout: {
          title: "¡Falta poco!",
          steps: {
            data: "Datos",
            customize: "Personalizar",
            review: "Revisar"
          },
          messages: {
            notFound: "No encontrado",
            paymentNotice: "¡Después de realizar el pago, actualiza la página!",
            subscriptionSuccess: "¡Suscripción realizada con éxito! Esperando el procesamiento del pago"
          },
          buttons: {
            back: "VOLVER",
            pay: "PAGAR",
            next: "SIGUIENTE"
          },
          pricing: {
            users: "Usuarios",
            connection: "Conexión",
            queues: "Colas",
            select: "SELECCIONAR",
            perMonth: "/mes"
          },
          review: {
            title: "Resumen de suscripción"
          },
          success: {
            total: "TOTAL",
            copied: "Copiado",
            copyQr: "Copiar código QR",
            finalizeMessage: "Para finalizar, simplemente realiza el pago escaneando o pegando el código Pix de arriba :)",
            licenseRenewed: "Tu licencia ha sido renovada hasta"
          },
          planDetails: {
            title: "Detalles del plan",
            billing: "Facturación: Mensual"
          },
          paymentInfo: {
            title: "Información de pago",
            email: "Email:",
            name: "Nombre:",
            document: "CPF/CNPJ:",
            total: "Total:"
          }
        }
      },
      dashboard: {
        title: "Panel de Control",
        buttons: {
          filter: "Filtrar"
        },
        tabs: {
          indicators: "Indicadores",
          assessments: "NPS",
          attendants: "Agentes",
          performance: "Rendimiento"
        },
        charts: {
          performance: "Gráficos",
          userPerformance: "Gráfico de Usuarios",
          hourlyServices: "Atenciones por hora",
          ticketsLabel: "Tickets",
          score: "Puntuación",
          perDay: {
            title: "Atenciones hoy: "
          },
          errorFetchingTickets: "Error al buscar información de los tickets",
          noDataAvailable: "No hay datos disponibles para el período seleccionado.",
        },
        cards: {
          inAttendance: "En Atención",
          waiting: "En Espera",
          activeAttendants: "Agentes Activos",
          finalized: "Finalizados",
          newContacts: "Nuevos Contactos",
          totalReceivedMessages: "Mensajes Recibidos",
          totalSentMessages: "Mensajes Enviados",
          averageServiceTime: "T.M. de Atención",
          averageWaitingTime: "T.M. de Espera",
          status: "Estado (Actual)",
          activeTickets: "Tickets Activos",
          passiveTickets: "Tickets Pasivos",
          groups: "Grupos"
        },
        users: {
          name: "Nombre",
          numberAppointments: "Cantidad de Atenciones",
          statusNow: "Actual",
          totalCallsUser: "Total de atenciones por usuario",
          totalAttendances: "Total de atenciones",
          totalLabel: "Total de atenciones: {{count}}",
          queues: "Colas",
          defaultQueue: "Conexión Predeterminada",
          workingHours: "Horario Laboral",
          startWork: "Inicio de Trabajo",
          endWork: "Fin de Trabajo",
          farewellMessage: "Mensaje de Despedida",
          theme: "Tema Predeterminado",
          menu: "Menú Predeterminado",
        },
        date: {
          initialDate: "Fecha Inicial",
          finalDate: "Fecha Final"
        },
        licence: {
          available: "Disponible hasta"
        },
        assessments: {
          totalCalls: "Total de Atenciones",
          callsWaitRating: "Atenciones esperando evaluación",
          callsWithoutRating: "Atenciones sin evaluación",
          ratedCalls: "Atenciones evaluados",
          evaluationIndex: "Índice de evaluación",
          score: "Puntuación",
          prosecutors: "Promotores",
          neutral: "Neutros",
          detractors: "Detractores",
          generalScore: "Puntuación NPS General",
        },
        status: {
          online: "Conectado",
          offline: "Desconectado",
        },
        filters: {
          title: "Filtros",
          initialDate: "Inicial",
          finalDate: "Final",
          filterButton: "Filtrar",
        },
        errors: {
          loadData: "No fue posible cargar los datos del dashboard.",
          exportExcel: "Error al exportar a Excel.",
        },
        export: {
          sheetName: "ReporteDeAgentes",
          fileName: "reporte-de-agentes.xlsx",
        },
        nps: {
          overallScore: "Puntuación NPS General",
        },
      },
      reports: {
        title: "Informe de Encuestas Realizadas",
        operator: "Operador",
        period: "Período",
        until: "Hasta",
        date: "Fecha",
        reportTitle: "Informes",
        calls: "Atenciones",
        search: "Encuestas",
        durationCalls: "Duración de los Atenciones",
        grupoSessions: "Atenciones en Grupos",
        groupTicketsReports: {
          timezone: "America/Sao_Paulo",
          msgToast: "Generando informe comprimido, por favor espere.",
          errorToast: "Error al generar el informe",
          back: "Volver",
          groupServiceReport: "Informe de Atenciones en Grupos",
          loading: "Cargando...",
          contact: "Contacto",
          dateOpen: "Fecha de Apertura",
          dateLastUpdated: "Fecha de Última Actualización",
          agent: "Quién Atendió",
          agentClosed: "Quién Cerró",
          waitingAssistance: "Esperando Atención",
          process: "En Atención"
        },
        researchReports: {
          response: "respuesta",
          active: "(Activa)",
          inactive: "(Inactiva)",
          quantity: "Cantidad",
          percentage: "porcentaje",
          title: "Informe de Encuestas Realizadas",
          activeSearch: "Encuesta activa",
          inactiveSearch: "Encuesta inactiva"
        },
        ticketDurationDetail: {
          msgToast: "Generando informe comprimido, por favor espere.",
          title: "Informe de Duración del Atención",
          startService: "Inicio del Atención",
          lastUpdated: "Última Actualización",
          lastAgent: "Último Agente",
          durationFinished: "Duración después de finalizado"
        },
        ticketDuration: {
          title: "Informe de Duración de los Atenciones",
          contact: "Contacto",
          open: "Abiertos",
          pending: "Pendientes",
          finished: "Finalizados",
          durationFinished: "Duración de los finalizados",
          durationAfterFinished: "Duración después de finalizado",
          actions: "Acciones"
        },
        ticketReports: {
          msgToast: "Generando informe comprimido, por favor espere.",
          title: "Informe de Atenciones"
        },
        pdf: {
          title: "Relación de Atenciones Realizados",
          exportTitle: "Relación de Atenciones en Grupos Realizados"
        },
        form: {
          initialDate: "Fecha Inicial",
          finalDate: "Fecha Final",
        },
        excel: {
          connection: "Conexión",
          contact: "Contacto",
          user: "Usuario",
          queue: "Cola",
          status: "Estado",
          lastMessage: "ÚltimoMensaje",
          dateOpen: "FechaApertura",
          timeOpen: "HoraApertura",
          dateClose: "FechaCierre",
          timeClose: "HoraCierre",
          supportTime: "TiempoDeAtención",
          nps: "nps",
          fileName: "informe-de-atenciones.xlsx",
          sheetName: "InformeDeAtenciones",
        },
        tooltips: {
          ticketLogs: "Logs del Ticket",
          accessTicket: "Acceder al Ticket",
          exportExcel: "Exportar a Excel",
        },
      },
      todo: {
        newTask: "Nueva Tarea",
        add: "Agregar",
        save: "Guardar",
        task: "Tareas"
      },
      contactImportWpModal: {
        modalTitle: "Exportar / Importar Contactos",
        title: "Exportar Contactos para el Excel",
        buttons: {
          downloadModel: "Descargar modelo de excel para importación",
          closed: "Cerrar",
          import: "Seleccione el archivo de excel para importar Contactos"
        },
        form: {
          connection: "Conexión de WhatsApp",
          connectionPlaceholder: "Seleccionar conexión...",
          importType: "Tipo de importación",
          importAll: "Importar todos los contactos",
          importSelected: "Importar contactos seleccionados",
          overwriteExisting: "Sobrescribir contactos existentes"
        },
        validation: {
          connectionRequired: "Debes seleccionar una conexión",
          noContactsFound: "No se encontraron contactos para importar"
        },
        progress: {
          importing: "Importando contactos...",
          imported: "Contactos importados: {count}",
          duplicated: "Contactos duplicados: {count}",
          failed: "Contactos fallados: {count}"
        },
        sheetName: "Contactos",
        columns: {
          name: "Nombre",
          number: "Número",
          email: "E-mail",
          tags: "Etiquetas",
          followUp: "Seguimiento",
          products: "Productos",
        },
        sampleContact: {
          name: "Juan",
          number: "5491112345678",
          email: "juan@email.com",
          tags: "cliente, vip",
          followUp: "",
          products: "Curso Marketing:completed, E-book SEO:pending",
        },
      },
      tagsContainer: {
        title: "Etiquetas del Contacto",
        placeholder: "Agregar etiqueta...",
        add: "Agregar",
        remove: "Eliminar",
        noTags: "Sin etiquetas asignadas",
        createNew: "Crear nueva etiqueta",
        searchPlaceholder: "Buscar etiquetas...",
        buttons: {
          save: "Guardar Etiquetas",
          cancel: "Cancelar",
          clear: "Limpiar Todo"
        },
        validation: {
          tagRequired: "El nombre de la etiqueta es obligatorio",
          tagExists: "Esta etiqueta ya existe",
          maxTags: "Máximo {max} etiquetas permitidas"
        }
      },
      allConnections: {
        errors: {
          loadCompanies: "No fue posible cargar la lista de registros",
          unknownChannel: "error"
        },
        subtitle: "Conecte sus canales de atención para recibir mensajes e iniciar conversaciones con sus clientes.",
        channels: {
          whatsapp: "WhatsApp",
          facebook: "Facebook",
          instagram: "Instagram"
        },
        table: {
          client: "Cliente",
          connectedConnections: "Conexiones Conectadas",
          disconnectedConnections: "Conexiones Desconectadas",
          totalConnections: "Total de Conexiones",
          total: "Total"
        }
      },
      companyWhatsapps: {
        title: "Conexiones de: {{companyName}}",
        table: {
          channel: "Canal"
        }
      },
      channels: {
        whatsapp: "WhatsApp",
        facebook: "Facebook",
        instagram: "Instagram"
      },
      connections: {
        title: "Conexiones",
        waitConnection: "Espera... ¡Tus conexiones se reiniciarán!",
        newConnection: "Nueva Conexión",
        restartConnections: "Reiniciar Conexiones",
        callSupport: "Llamar Soporte",
        toasts: {
          deleted: "¡Conexión eliminada con éxito!",
          closedimported: "Estamos cerrando los tickets importados, por favor espere unos instantes"
        },
        confirmationModal: {
          closedImportedTitle: "Cerrar tickets importados",
          closedImportedMessage: "Si confirmas, todos los tickets importados serán cerrados",
          deleteTitle: "Eliminar",
          deleteMessage: "¿Estás seguro? Esta acción no se puede revertir.",
          disconnectTitle: "Desconectar",
          disconnectMessage: "¿Estás seguro? Deberás leer el código QR de nuevo."
        },
        buttons: {
          add: "Agregar Conexión",
          disconnect: "Desconectar",
          tryAgain: "Intentar de nuevo",
          qrcode: "CÓDIGO QR",
          newQr: "Nuevo CÓDIGO QR",
          closedImported: "Cerrar todos los tickets importados",
          preparing: "Preparando mensajes para importación",
          importing: "Importando Mensajes de WhatsApp",
          newQr: "Nuevo CÓDIGO QR",
          processed: "Procesado",
          in: "de",
          connecting: "Conectando"
        },
        typography: {
          processed: "Procesado",
          in: "de",
          date: "Fecha del mensaje"
        },
        toolTips: {
          disconnected: {
            title: "Error al iniciar sesión de WhatsApp",
            content: "Asegúrate de que tu celular esté conectado a internet y intenta de nuevo, o solicita un nuevo Código QR"
          },
          qrcode: {
            title: "Esperando lectura del Código QR",
            content: "Haz clic en el botón 'CÓDIGO QR' y lee el Código QR con tu celular para iniciar la sesión"
          },
          connected: {
            title: "¡Conexión establecida!"
          },
          timeout: {
            title: "La conexión con el celular fue perdida",
            content: "Asegúrate de que tu celular esté conectado a internet y el WhatsApp esté abierto, o haz clic en el botón 'Desconectar' para obtener un nuevo Código QR"
          }
        },
        table: {
          name: "Nombre",
          status: "Estado",
          lastUpdate: "Última actualización",
          "default": "Predeterminado",
          actions: "Acciones",
          session: "Sesión",
          number: "Número de Whatsapp",
          channel: "Canal"
        },
        iconChannel: {
          error: "Error"
        }
      },
      showTicketOpenModal: {
        title: {
          header: "Atención Existente"
        },
        form: {
          message: "Este contacto ya está en atención:",
          user: "Agente",
          queue: "Cola",
          messageWait: "Este contacto ya está esperando atención. ¡Ve en la pestaña Esperando!",
          ticketId: "ID del Ticket",
          status: "Estado",
          createdAt: "Creado en",
          updatedAt: "Actualizado en"
        },
        buttons: {
          goToTicket: "Ir al Ticket",
          close: "Cerrar",
          transferTicket: "Transferir Ticket"
        },
        status: {
          open: "Abierto",
          pending: "Pendiente",
          closed: "Cerrado"
        }
      },
      showTicketLogModal: {
        title: {
          header: "Registros"
        },
        options: {
          create: "Ticket creado.",
          chatBot: "ChatBot iniciado.",
          queue: " - Cola definida.",
          open: " inició el atención.",
          access: "accedió al ticket.",
          transfered: "transfirió el ticket.",
          receivedTransfer: "recibió el ticket transferido.",
          pending: "devolvió la cola.",
          closed: "cerró el ticket",
          reopen: "reabrió el ticket",
          redirect: "- redirigido"
        },
        close: "Cerrar",
      },
      statusFilter: {
        title: "Filtro por Estado",
        groups: "Grupos",
      },
      whatsappModal: {
        title: {
          add: "Agregar Conexión",
          edit: "Editar Conexión"
        },
        tabs: {
          general: "General",
          messages: "Mensajes",
          assessments: "NPS",
          integrations: "Integraciones",
          schedules: "Horario de atención",
          chatbot: "Chatbot",
          defaultFlow: "Flujo por Defecto"
        },
        form: {
          importOldMessagesEnable: "Importar mensajes del dispositivo",
          importOldMessages: "Fecha de inicio de la importación",
          importRecentMessages: "Fecha de finalización de la importación",
          importOldMessagesGroups: "Importar mensajes de grupo",
          closedTicketsPostImported: "Cerrar tickets después de la importación",
          name: "Nombre",
          queueRedirection: "Redirección de Cola",
          queueRedirectionDesc: "Selecciona una cola para que los contactos que no tienen cola sean redirigidos",
          "default": "Predeterminado",
          group: "Permitir grupos",
          timeSendQueue: "Tiempo en minutos para redirigir a la cola",
          importAlert: "ATENCIÓN: Al guardar, tu conexión se cerrará, será necesario leer de nuevo el Código QR para importar los mensajes",
          groupAsTicket: "Tratar grupos como ticket",
          timeCreateNewTicket: "Crear nuevo ticket en x minutos",
          maxUseBotQueues: "Enviar bot x veces",
          timeUseBotQueues: "Enviar bot en x minutos",
          expiresTicket: "Cerrar chats abiertos después de x minutos",
          expiresTicketNPS: "Cerrar chats esperando evaluación después de x minutos",
          maxUseBotQueuesNPS: "Cantidad máxima de veces que la evaluación va a ser enviada",
          closeLastMessageOptions1: "Del agente/Cliente",
          closeLastMessageOptions2: "Del agente",
          outOfHoursMessage: "Mensaje de fuera de horario de atención",
          greetingMessage: "Mensaje de bienvenida",
          complationMessage: "Mensaje de conclusión",
          lgpdLinkPrivacy: "Link para política de privacidad",
          lgpdMessage: "Mensaje de bienvenida LGPD",
          lgpdDeletedMessages: "Ofuscar mensaje borrado por el contacto",
          lgpdSendMessage: "Siempre solicitar confirmación del contacto",
          ratingMessage: "Mensaje de evaluación - La escala debe ser de 0 a 10",
          token: "Token para integración externa",
          sendIdQueue: "Cola",
          inactiveMessage: "Mensaje de inactividad",
          timeInactiveMessage: "Tiempo en minutos para envío del aviso de inactividad",
          whenExpiresTicket: "Cerrar chats abiertos cuando la última mensaje sea",
          expiresInactiveMessage: "Mensaje de cierre por inactividad",
          prompt: "Prompt",
          collectiveVacationEnd: "Fecha final",
          collectiveVacationStart: "Fecha inicial",
          collectiveVacationMessage: "Mensaje de vacaciones colectivas",
          queueIdImportMessages: "Cola para importar los mensajes"
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar"
        },
        menuItem: {
          enabled: "Habilitado",
          disabled: "Deshabilitado",
          minutes: "minutos"
        },
        messages: {
          clickSaveToRegister: "Haga clic en guardar para registrar cambios",
        },
        flowBuilder: {
          welcomeFlow: "Flujo de bienvenida",
          welcomeFlowDescription: "Este flujo se dispara solo para contactos nuevos, personas que no tienes en tu lista de contactos y que enviaron un mensaje",
          defaultResponseFlow: "Flujo de respuesta por defecto",
          defaultResponseFlowDescription: "La Respuesta por Defecto se envía con cualquier carácter diferente de una palabra clave. ¡ATENCIÓN! Se disparará si la atención ya está cerrada y han pasado 6 horas desde su cierre.",
          title: "Flujo por defecto",
          save: "Guardar",
          updatedSuccess: "Flujos por defecto actualizados",
          deleteConfirmation: "¿Estás seguro de que deseas eliminar este flujo? Todas las integraciones relacionadas se perderán.",
        },
        success: "Conexión guardada con éxito.",
        errorSendQueue: "Se informó tiempo para redirigir cola, pero no se seleccionó fila para redirigir. Ambos campos deben estar llenos",
        errorExpiresNPS: "Es obligatorio informar un tiempo para evaluación cuando se utiliza el NPS.",
        errorRatingMessage: "Es obligatorio informar un mensaje de evaluación cuando se utiliza el NPS."
      },
      qrCode: {
        message: "Lee el QrCode para iniciar la sesión"
      },
      qrcodeModal: {
        waiting: "Esperando el Código QR"
      },
      forbiddenPage: {
        accessDenied: "¡Ups! ¡Acceso Denegado!",
        buttons: {
          back: "Volver"
        }
      },
      contacts: {
        title: "Contactos",
        toasts: {
          deleted: "¡Contacto eliminado con éxito!"
        },
        searchPlaceholder: "Buscar...",
        confirmationModal: {
          deleteTitle: "Eliminar ",
          importTitlte: "Importar contactos",
          exportContact: "Exportar contactos",
          deleteMessage: "¿Estás seguro de que deseas eliminar este contacto? Todos los atenciones relacionados se perderán.",
          blockContact: "¿Estás seguro de que deseas bloquear este contacto?",
          unblockContact: "¿Estás seguro de que deseas desbloquear este contacto?",
          importMessage: "¿Desea importar todos los contactos del teléfono?",
          importChat: "Importar Conversaciones",
          wantImport: "¿Desea importar todas las conversaciones del teléfono?"
        },
        buttons: {
          import: "Importar Contactos",
          add: "Agregar Contacto",
          export: "Exportar Contacto"
        },
        table: {
          name: "Nombre",
          whatsapp: "Conexión",
          email: "Correo electrónico",
          actions: "Acciones",
          lastMessage: "Última Mensaje",
          status: "Estado",
          followUp: "Seguimiento",
          tags: "Etiquetas",
          products: "Producto",
          payment: "Pago",
          attendant: "Agente",
          selectAll: "Seleccionar todos los contactos",
          selectContact: "Seleccionar contacto {{name}}",
        },
        productStatus: {
          pending: "Pendiente",
          completed: "Completado",
          cancelled: "Cancelado",
          refunded: "Reembolsado",
          in_progress: "En Progreso",
        },
        menu: {
          importYourPhone: "Importar del dispositivo predeterminado",
          importToExcel: "Importar / Exportar del Excel",
          importExport: "Importar / Exportar"
        },
        bulkActions: {
          deleteSelected: "Eliminar Seleccionados ({{count}})",
          deleteConfirmTitle: "¿Estás seguro de que deseas eliminar {{count}} contactos seleccionados?",
          deleteConfirmMessage: "Esta acción es irreversible.",
          deleteSuccess: "¡Contactos seleccionados eliminados con éxito!",
          blockContact: "Contacto bloqueado",
          unblockContact: "Contacto desbloqueado",
          selectConnectionToImport: "Elige de qué conexión deseas importar"
        },
        tagsFilter: {
          title: "Filtrar por Etiquetas",
          placeholder: "Selecciona etiquetas...",
          noTags: "Sin etiquetas disponibles",
          clearFilters: "Limpiar filtros",
          selectedTags: "Etiquetas seleccionadas"
        },
        validation: {
          nameRequired: "El nombre es obligatorio",
          numberRequired: "El número es obligatorio",
          emailRequired: "El email es obligatorio",
          invalidEmail: "Email inválido",
          numberExists: "Este número ya existe",
          emailExists: "Este email ya existe",
          invalidNumber: "Número inválido",
          numberTooShort: "Número demasiado corto",
          numberTooLong: "Número demasiado largo",
          nameTooShort: "Nombre demasiado corto",
          nameTooLong: "Nombre demasiado largo"
        }
      },
      contactImport: {
        title: "Importar contactos desde archivo",
        validation: {
          noNumberField: "No se seleccionó el campo de número de contacto",
          noNameField: "No se seleccionó el campo de nombre de contacto",
          noContactsSelected: "Ningún contacto seleccionado",
          fieldAlreadySelected: "El campo {{field}} ya fue seleccionado."
        },
        messages: {
          successComplete: "Importación realizada con éxito",
          successWithErrors: "Importación realizada con éxito, pero hubo algunos errores",
          importing: "Importando... Aguarde",
          processing: "Procesando archivo...",
          invalidFile: "¡Archivo inválido!",
          contactsCreated: "contactos creados",
          contactsIgnored: "contactos ignorados (número inválido o no marcados para actualizar)"
        },
        fields: {
          name: "Nombre",
          number: "Número",
          email: "E-mail",
          tags: "Etiquetas",
          followUp: "Seguimiento (Observaciones)",
          products: "Productos (Nombre:Estado)"
        },
        buttons: {
          validateWhatsApp: "Validar contactos en WhatsApp",
          importContacts: "Importar contactos",
          cancel: "Cancelar",
          back: "Volver"
        },
        dropzone: {
          clickOrDrag: "Haga clic o arrastre un archivo",
          importantNote: "* Importante: Solo se aceptan archivos con extensiones: xls, xlsx, csv, txt"
        }
      },
      forwardMessage: {
        text: "Reenviada"
      },
      forwardMessageModal: {
        title: "Reenviar mensaje",
        buttons: {
          ok: "Reenviar"
        }
      },
      promptModal: {
        form: {
          name: "Nombre",
          prompt: "Prompt",
          voice: "Voz",
          max_tokens: "Máximo de Tokens en la respuesta",
          temperature: "Temperatura",
          apikey: "API Key",
          max_messages: "Máximo de mensajes en el Historial",
          voiceKey: "Clave de la API de Voz",
          voiceRegion: "Región de Voz",
          model: "Modelo"
        },
        success: "¡Prompt guardado con éxito!",
        title: {
          add: "Agregar Prompt",
          edit: "Editar Prompt"
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar"
        },
        validation: {
          tooShort: "¡Muy corto!",
          tooLong: "¡Muy largo!",
          required: "Obligatorio",
          promptDescription: "Describe el entrenamiento para Inteligencia Artificial",
          invalidModel: "Modelo inválido",
          informModel: "Informa el modelo",
          minTokens: "Mínimo 10 tokens",
          maxTokens: "Máximo 4096 tokens",
          informMaxTokens: "Informa el número máximo de tokens",
          minZero: "Mínimo 0",
          maxOne: "Máximo 1",
          informTemperature: "Informa la temperatura",
          informApiKey: "Informa la API Key",
          informQueue: "Informa la cola",
          minMessages: "Mínimo 1 mensaje",
          maxMessages: "Máximo 50 mensajes",
          informMaxMessages: "Informa el número máximo de mensajes",
          informVoiceMode: "Informa el modo de voz"
        },
        errors: {
          savePrompt: "Error al guardar el prompt"
        },
        models: {
          gpt35: "GPT 3.5 Turbo",
          gpt4o: "GPT 4o",
          gemini15flash: "Gemini 1.5 Flash",
          gemini15pro: "Gemini 1.5 Pro",
          gemini20flash: "Gemini 2.0 Flash",
          gemini20pro: "Gemini 2.0 Pro"
        },
        voices: {
          text: "Texto",
          francisca: "Francisca",
          antonio: "Antonio",
          brenda: "Brenda",
          donato: "Donato",
          elza: "Elza",
          fabio: "Fabio",
          giovanna: "Giovanna",
          humberto: "Humberto",
          julio: "Julio",
          leila: "Leila",
          leticia: "Leticia",
          manuela: "Manuela",
          nicolau: "Nicolau",
          valerio: "Valerio",
          yara: "Yara"
        }
      },
      prompts: {
        title: "Prompts",
        table: {
          name: "Nombre",
          queue: "Sector/Cola",
          max_tokens: "Máximo Tokens Respuesta",
          actions: "Acciones"
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "¿Estás seguro? ¡Esta acción no se puede revertir!"
        },
        buttons: {
          add: "Agregar Prompt"
        },
        errors: {
          noPermission: "¡Esta empresa no tiene permisos para acceder a esta página! Te estamos redirigiendo."
        }
      },
      contactModal: {
        title: {
          add: "Agregar contacto",
          edit: "Editar contacto"
        },
        form: {
          mainInfo: "Datos del contacto",
          extraInfo: "Información adicional",
          name: "Nombre",
          number: "Número de Whatsapp",
          email: "Correo electrónico",
          extraName: "Nombre del campo",
          extraValue: "Valor",
          chatBotContact: "Deshabilitar chatbot",
          followUp: "Seguimiento (Observaciones)",
          followUpPlaceholder: "Observaciones sobre el contacto...",
          termsLGDP: "Términos LGPD aceptados en:",
          whatsapp: "Conexión Origen: ",
          numberPlaceholder: "5513912344321",
          emailPlaceholder: "Dirección de correo electrónico",
          products: "Productos",
          productName: "Nombre del producto",
        },
        buttons: {
          addExtraInfo: "Agregar información",
          addProduct: "Agregar",
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar"
        },
        success: "Contacto guardado con éxito."
      },
      contactTagListModal: {
        title: "Contactos",
        table: {
          id: "ID",
          name: "Nombre",
          number: "Número",
          actions: "Acciones"
        }
      },
      flowbuilder: {
        title: "Flujos de conversación",
        subMenus: {
          campaign: "Flujo de Campaña",
          conversation: "Flujo de Conversación"
        },
        buttons: {
          add: "Agregar Flujo",
          editName: "Editar nombre",
          editFlow: "Editar flujo",
          duplicate: "Duplicar",
          delete: "Eliminar"
        },
        table: {
          status: "Estado"
        },
        status: {
          active: "Activo",
          inactive: "Inactivo"
        },
        toasts: {
          deleteSuccess: "Flujo eliminado con éxito",
          duplicateSuccess: "Flujo duplicado con éxito"
        },
        confirmationModal: {
          deleteTitle: "¿Estás seguro de que quieres eliminar este flujo? Se perderán todas las integraciones relacionadas.",
          duplicateTitle: "¿Quieres duplicar el flujo {flowName}?",
          duplicateMessage: "¿Estás seguro de que quieres duplicar este flujo?"
        }
      },
      flowbuilderModal: {
        flowNotIdPhrase: "Flujo predeterminado",
        title: {
          add: "Agregar Flujo",
          edit: "Editar Flujo"
        },
        validation: {
          tooShort: "¡Muy corto!",
          tooLong: "¡Muy largo!",
          required: "¡Ingresa un nombre!"
        }
      },
      queueModal: {
        title: {
          queueData: "Datos de la cola",
          text: "Horarios de atención",
          add: "Agregar cola",
          edit: "Editar cola",
          confirmationDelete: "¿Estás seguro? Se eliminarán todas las opciones de integración."
        },
        form: {
          name: "Nombre",
          color: "Color",
          orderQueue: "Orden de la cola (Bot)",
          rotate: "Rotación",
          timeRotate: "Tiempo de Rotación",
          greetingMessage: "Mensaje de bienvenida",
          complationMessage: "Mensaje de conclusión",
          outOfHoursMessage: "Mensaje de fuera de horario de atención",
          token: "Token",
          integrationId: "Integración",
          fileListId: "Lista de archivos",
          closeTicket: "Cerrar ticket",
          queueType: "Tipo de menú",
          message: "Mensaje de retorno",
          queue: "Cola para transferencia",
          integration: "Integración",
          file: "Archivo",
          selectFile: "Seleccione un archivo",
          timeOptions: {
            minutes2: "2 minutos",
            minutes5: "5 minutos",
            minutes10: "10 minutos",
            minutes15: "15 minutos",
            minutes30: "30 minutos",
            minutes45: "45 minutos",
            minutes60: "60 minutos",
          },
        },
        validations: {
          tooShort: "¡Muy corto!",
          tooLong: "¡Muy largo!",
          required: "Requerido",
          mustHaveFriends: "Debe tener amigos",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar"
        },
        bot: {
          title: "Opciones",
          toolTipTitle: "Agregue opciones para construir un chatbot",
          toolTip: "Si hay solo una opción, se elegirá automáticamente, haciendo que el bot responda con el mensaje de la opción y siga adelante",
          selectOption: "Seleccione una opción",
          text: "Texto",
          attendent: "Agente",
          queue: "Cola",
          integration: "Integración",
          file: "Archivo",
          toolTipMessageTitle: "El mensaje es obligatorio para seguir al siguiente nivel",
          toolTipMessageContent: "El mensaje es obligatorio para seguir al siguiente nivel",
          selectUser: "Seleccione un Usuario",
          selectQueue: "Seleccione una Cola",
          selectIntegration: "Seleccione una Integración",
          addOptions: "Agregar opciones",
          confirmationDelete: "¿Está seguro? Todas las opciones internas también serán eliminadas",
          messageLabel: "Mensaje:",
          toolTipMessage: "El mensaje es obligatorio para seguir al siguiente nivel",
          toolTipContent: "Si el mensaje no está definido, el bot no seguirá adelante",
        },
        serviceHours: {
          dayWeek: "Día de la semana",
          startTimeA: "Hora Inicial - Turno A",
          endTimeA: "Hora Final - Turno A",
          startTimeB: "Hora Inicial - Turno B",
          endTimeB: "Hora Final - Turno B",
          monday: "Lunes",
          tuesday: "Martes",
          wednesday: "Miércoles",
          thursday: "Jueves",
          friday: "Viernes",
          saturday: "Sábado",
          sunday: "Domingo"
        },
        general: {
          none: "Ninguno",
          message: "Mensaje:",
        },
      },
      colorBoxModal: {
        title: "Elige un color",
        buttons: {
          cancel: "Cancelar",
          ok: "OK",
        },
      },
      queueIntegrationModal: {
        title: {
          add: "Agregar proyecto",
          edit: "Editar proyecto"
        },
        form: {
          id: "ID",
          type: "Tipo",
          name: "Nombre",
          projectName: "Nombre del Proyecto",
          language: "Idioma",
          jsonContent: "Contenido Json",
          urlN8N: "URL",
          typebotSlug: "Typebot - Slug",
          typebotExpires: "Tiempo en minutos para expirar una conversación",
          typebotKeywordFinish: "Palabra para finalizar el ticket",
          typebotKeywordRestart: "Palabra para reiniciar el flujo",
          typebotRestartMessage: "Mensaje al reiniciar la conversación",
          typebotUnknownMessage: "Mensaje de opción inválida",
          typebotDelayMessage: "Intervalo (ms) entre mensajes"
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
          test: "Probar Bot"
        },
        languages: {
          "pt-BR": "Portugués",
          "en": "Inglés",
          "es": "Español",
        },
        messages: {
          testSuccess: "¡Integración probada con éxito!",
          addSuccess: "Integración agregada con éxito.",
          editSuccess: "Integración editada con éxito."
        }
      },
      userModal: {
        warning: "¡Para hacer la importación de los mensajes es necesario leer el qrCode nuevamente !!!",
        title: {
          add: "Agregar usuario",
          edit: "Editar usuario",
          updateImage: "Actualizar imagen",
          removeImage: "Eliminar imagen"
        },
        form: {
          canViewAllContacts: "Ver todos los contactos",
          name: "Nombre",
          none: "Ninguna",
          email: "Correo electrónico",
          password: "Contraseña",
          farewellMessage: "Mensaje de despedida",
          profile: "Perfil",
          startWork: "Inicio de trabajo",
          endWork: "Fin de trabajo",
          whatsapp: "Conexión Predeterminada",
          allTicketEnable: "Habilitado",
          allTicketDisable: "Deshabilitado",
          allTicket: "Visualizar llamadas sin cola",
          allowGroup: "Permitir Grupos",
          defaultMenuOpen: "Abierto",
          defaultMenuClosed: "Cerrado",
          defaultMenu: "Menú predeterminado",
          defaultTheme: "Tema Predeterminado",
          defaultThemeDark: "Oscuro",
          defaultThemeLight: "Claro",
          allHistoric: "Ver conversaciones de otras colas",
          allHistoricEnabled: "Habilitado",
          allHistoricDisabled: "Deshabilitado",
          allUserChat: "Ver conversaciones de otros usuarios",
          userClosePendingTicket: "Permitir cerrar tickets pendientes",
          showDashboard: "Ver Dashboard",
          allowRealTime: "Ver Panel de Atenciones",
          allowConnections: "Permitir acciones en las conexiones"
        },
        tabs: {
          general: "General",
          permissions: "Permisos"
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
          addImage: "Agregar Imagen",
          editImage: "Editar Imagen"
        },
        success: "Usuario guardado con éxito."
      },
      companyModal: {
        title: {
          add: "Agregar empresa",
          edit: "Editar empresa"
        },
        form: {
          name: "Nombre",
          email: "Correo electrónico",
          passwordDefault: "Contraseña",
          numberAttendants: "Usuarios",
          numberConections: "Conexiones",
          status: "Activo"
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar"
        },
        success: "Empresa guardada con éxito."
      },
      scheduleModal: {
        title: {
          add: "Nueva Programación",
          edit: "Editar Programación"
        },
        form: {
          body: "Mensaje",
          contact: "Contacto",
          sendAt: "Fecha de Programación",
          sentAt: "Fecha de Envío",
          assinar: "Enviar Firma"
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
          addSchedule: "Agregar programación"
        },
        success: "Programación guardada con éxito.",
        validations: {
          tooShort: "Mensaje muy corto",
          required: "Obligatorio"
        },
        toasts: {
          deleted: "Media eliminada con éxito."
        },
        confirmationModal: {
          deleteTitle: "Eliminar Media",
          deleteMessage: "¿Estás seguro de que quieres eliminar esta media?"
        },
        status: {
          sending: "Enviando",
          pending: "Pendiente",
          sent: "Enviado",
          error: "Error de Envío"
        },
        recurrence: {
          title: "Recurrencia",
          description: "Puedes elegir enviar el mensaje de forma recurrente y elegir el intervalo. Si es un mensaje único, no cambies nada en esta sección.",
          interval: "Intervalo",
          intervalValue: "Valor del Intervalo",
          sendTimes: "Enviar cuántas veces",
          intervalTypes: {
            days: "Días",
            weeks: "Semanas",
            months: "Meses",
            minutes: "Minutos"
          },
          businessDays: {
            normal: "Enviar normalmente en días no laborables",
            before: "Enviar un día laborable antes",
            after: "Enviar un día laborable después"
          }
        },
        calendar: {
          messages: {
            date: "Fecha",
            time: "Hora",
            event: "Evento",
            allDay: "Todo el Día",
            week: "Semana",
            work_week: "Programaciones",
            day: "Día",
            month: "Mes",
            previous: "Anterior",
            next: "Siguiente",
            yesterday: "Ayer",
            tomorrow: "Mañana",
            today: "Hoy",
            agenda: "Agenda",
            noEventsInRange: "No hay programaciones en el período.",
            showMore: "más"
          }
        },
        permissions: {
          noAccess: "¡Esta empresa no tiene permisos para acceder a esta página! Te estamos redirigiendo."
        }
      },
      tagModal: {
        title: {
          add: "Nueva Etiqueta",
          edit: "Editar Etiqueta",
          addKanban: "Nueva Columna",
          editKanban: "Editar Columna"
        },
        form: {
          name: "Nombre",
          color: "Color",
          timeLane: "Tiempo en horas para redirigir a la columna",
          nextLaneId: "Columna",
          greetingMessageLane: "Mensaje de bienvenida de la columna",
          rollbackLaneId: "Volver a la Columna después de retomar el atención"
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar"
        },
        validation: {
          tooShort: "¡Demasiado corto!",
          required: "Obligatorio"
        },
        success: "Etiqueta guardada con éxito.",
        successKanban: "Columna guardada con éxito."
      },
      fileModal: {
        title: {
          add: "Agregar lista de archivos",
          edit: "Editar lista de archivos"
        },
        buttons: {
          okAdd: "Guardar",
          okEdit: "Editar",
          cancel: "Cancelar",
          fileOptions: "Agregar archivo"
        },
        form: {
          name: "Nombre de la lista de archivos",
          message: "Detalles de la lista",
          fileOptions: "Lista de archivos",
          extraName: "Mensaje para enviar con archivo",
          extraValue: "Valor de la opción"
        },
        success: "¡Lista de archivos guardada con éxito!"
      },
      chat: {
        noTicketMessage: "Selecciona un ticket para comenzar a conversar.",
        deleteConversationTitle: "Eliminar Conversación",
        deleteConversationMessage: "Esta acción no se puede revertir, ¿confirmar?",
        messagePlaceholder: "Escribe tu mensaje...",
        sendButtonTooltip: "Enviar mensaje",
        noMessagesYet: "Aún no hay mensajes. ¡Comienza la conversación!",
        loadingMessages: "Cargando mensajes...",
        popover: {
          buttonTooltip: "Conversaciones internas",
          loading: "Cargando conversaciones...",
          noChats: "No hay conversaciones disponibles",
          notificationNotSupported: "Este navegador no admite notificaciones",
          accessibilityLabel: "Lista de conversaciones internas",
        },
      },
      uploads: {
        titles: {
          titleUploadMsgDragDrop: "⬇️ ARRASTRA Y SUELTA ARCHIVOS EN EL CAMPO ABAJO ⬇️",
          titleFileList: "Lista de archivo(s)"
        }
      },
      chatInternal: {
        new: "Nueva",
        tabs: {
          chats: "Chats",
          messages: "Mensajes",
        },
        form: {
          titleLabel: "Título",
          titlePlaceholder: "Título",
        },
        modal: {
          conversation: "Conversación",
          title: "Título",
          filterUsers: "Filtrar por Usuarios",
          cancel: "Cerrar",
          save: "Guardar"
        },
        modalDelete: {
          title: "Eliminar Conversación",
          message: "Esta acción no se puede revertir, ¿confirmar?"
        }
      },
      ticketsManager: {
        questionCloseTicket: "¿DESEAS CERRAR TODOS LOS TICKETS?",
        yes: "SÍ",
        not: "NO",
        buttons: {
          newTicket: "Nuevo",
          resolveAll: "Resolver Todos",
          close: "Cerrar",
          new: "Nuevo"
        }
      },
      ticketsQueueSelect: {
        placeholder: "Colas"
      },
      tickets: {
        inbox: {
          closedAllTickets: "¿Cerrar todos los tickets?",
          closedAll: "Cerrar Todos",
          newTicket: "Nuevo Ticket",
          yes: "SÍ",
          no: "NO",
          open: "Abiertos",
          resolverd: "Resueltos"
        },
        toasts: {
          deleted: "La atención en la que estabas fue eliminada."
        },
        notification: {
          message: "Mensaje de"
        },
        tabs: {
          open: {
            title: "Abiertas"
          },
          closed: {
            title: "Resueltos"
          },
          search: {
            title: "Búsqueda"
          }
        },
        search: {
          placeholder: "Buscar atención y mensajes",
          filterConections: "Filtrar por Conexión",
          filterConectionsOptions: {
            open: "Abierto",
            closed: "Cerrado",
            pending: "Pendiente"
          },
          filterUsers: "Filtrar por Usuarios",
          filterContacts: "Filtrar por Contactos",
          ticketsPerPage: "Tickets por página"
        },
        buttons: {
          showAll: "Todos",
          returnQueue: "Devolver a la Cola",
          scredule: "Programación",
          deleteTicket: "Eliminar Ticket",
          quickMessageFlash: "Respuestas rápidas"
        },
        noContactName: "(sin contacto)",
        noDepartment: "Sin departamento",
        group: "Grupo",
        transferTooltip: "Transferir Ticket",
        closedTicket: {
          closedMessage: "Cerrar Ticket Con Mensaje de Despedida",
          closedNotMessage: "Cerrar Ticket Sin Mensaje de Despedida"
        }
      },
      messages: {
        download: "Descargar",
        today: "HOY",
        contact: "Contacto",
        forwarded: "Reenviado",
        deletedByContact: "🚫 Este mensaje fue eliminado por el contacto &nbsp;",
        deletedMessage: "🚫 _Mensaje eliminado_ ",
        deletedBySender: "🚫 Este mensaje fue eliminado &nbsp;",
        youReacted: "Reaccionaste... ",
        sayHello: "¡Saluda a tu nuevo contacto!",
        dropFile: "Suelta el archivo aquí",
        facebookPolicy: "Tienes 24h para responder después de recibir un mensaje, según las políticas de Facebook.",
        defaultMetaMessage: "¡Hola! Estoy interesado y me gustaría más información, por favor.",
      },
      ticketsResponsive: {
        search: {
          searchInMessagesTooltip: "Marca para buscar también en el contenido de los mensajes (más lento)",
        },
        filter: {
          all: "Todos",
        },
        sort: {
          ascending: "Ascendente",
          descending: "Descendente",
        },
      },
      contactForm: {
        validation: {
          tooShort: "¡Muy corto!",
          tooLong: "¡Muy largo!",
          required: "Obligatorio",
          invalidEmail: "Email inválido",
        },
        placeholders: {
          number: "5513912344321",
          email: "Dirección de correo",
        },
      },
      common: {
        image: "imagen",
      },
      messageInputResponsive: {
        privateMessage: {
          suffix: "Mensaje Privado",
        },
        type: {
          document: "Documento",
          buttons: "Botones",
        },
        tooltip: {
          toggleSignature: "Habilitar/Deshabilitar Firma",
          toggleComments: "Habilitar/Deshabilitar Comentarios",
        },
      },
      transferTicketModal: {
        title: "Transferir Ticket",
        fieldLabel: "Escribe para buscar usuarios",
        fieldQueueLabel: "Transferir a cola",
        fieldQueuePlaceholder: "Selecciona una cola",
        fieldWhatsapp: "Selecciona un whatsapp",
        noOptions: "Ningún usuario encontrado con ese nombre",
        msgTransfer: "Observaciones - mensaje interno, no va para el cliente",
        buttons: {
          ok: "Transferir",
          cancel: "Cancelar"
        }
      },
      ticketsList: {
        called: "Llamado",
        today: "Hoy",
        missedCall: "Llamada de voz/video perdida a las",
        pendingHeader: "Esperando",
        assignedHeader: "Atendiendo",
        groupingHeader: "Grupos",
        noTicketsTitle: "¡Nada aquí!",
        noTicketsMessage: "Ningún atención encontrado con este estado o término buscado",
        noQueue: "Sin Cola",
        buttons: {
          accept: "Aceptar",
          cancel: "Cancelar",
          start: "Iniciar",
          closed: "Cerrar",
          reopen: "Reabrir",
          transfer: "Transferir",
          ignore: "Ignorar",
          exportAsPDF: "Exportar para PDF",
          kanbanActions: "Opciones de Kanban"
        },
        acceptModal: {
          title: "Aceptar Chat",
          queue: "Seleccionar sector"
        }
      },
      newTicketModal: {
        title: "Crear Ticket",
        fieldLabel: "Escribe para buscar el contacto",
        add: "Agregar",
        buttons: {
          ok: "Guardar",
          cancel: "Cancelar"
        },
        form: {
          contact: "Contacto",
          queue: "Cola",
          message: "Mensaje inicial",
          contactPlaceholder: "Buscar contacto...",
          queuePlaceholder: "Seleccionar cola...",
          messagePlaceholder: "Mensaje inicial opcional..."
        },
        validation: {
          contactRequired: "Debes seleccionar un contacto",
          queueRequired: "Debes seleccionar una cola"
        }
      },
      SendContactModal: {
        title: "Enviar contacto",
        fieldLabel: "Escribe para buscar el contacto",
        add: "Agregar",
        buttons: {
          ok: "Enviar",
          cancel: "Cancelar"
        }
      },
      mainDrawer: {
        listItems: {
          dashboard: "Dashboard",
          connections: "Conexiones",
          chatsTempoReal: "Panel",
          tickets: "Atenciones",
          quickMessages: "Respuestas rápidas",
          contacts: "Contactos",
          queues: "Colas & Chatbot",
          flowbuilder: "Flowbuilder",
          tags: "Etiquetas",
          administration: "Administración",
          companies: "Empresas",
          users: "Usuarios",
          settings: "Configuraciones",
          files: "Lista de archivos",
          helps: "Ayuda",
          messagesAPI: "API",
          schedules: "Programaciones",
          campaigns: "Campañas",
          annoucements: "Informativos",
          chats: "Chat Interno",
          financeiro: "Financiero",
          queueIntegration: "Integraciones",
          version: "Versión",
          kanban: "Kanban",
          prompts: "Prompts",
          allConnections: "Administrar conexiones",
          reports: "Informes",
          management: "Gerencia"
        },
        appBar: {
          user: {
            profile: "Perfil",
            logout: "Salir",
            message: "Hola",
            messageEnd: "bienvenido a",
            active: "Activo hasta",
            goodMorning: "Hola,",
            myName: "mi nombre es",
            continuity: "y daré continuidad en tu atención.",
            virtualAssistant: "Asistente Virtual",
            token: "Token inválido, por favor entra en contacto con el administrador de la plataforma."
          },
          message: {
            location: "Ubicación",
            contact: "Contacto"
          },
          notRegister: "Ningún registro",
          refresh: "Actualizar"
        }
      },
      languages: {
        undefined: "Idioma",
        "pt-BR": "Portugués",
        es: "Español",
        en: "English",
        tr: "Türkçe"
      },
      messagesAPI: {
        title: "API",
        textMessage: {
          number: "Número",
          body: "Mensaje",
          token: "Token registrado",
          userId: "ID del usuario/agente",
          queueId: "ID de la Cola"
        },
        mediaMessage: {
          number: "Número",
          body: "Nombre del archivo",
          media: "Archivo",
          token: "Token registrado"
        },
        API: {
          title: "Documentación para envío de mensajes",
          methods: {
            title: "Métodos de Envío",
            messagesText: "Mensajes de Texto",
            messagesMidia: "Mensajes de Media"
          },
          instructions: {
            title: "Instrucciones",
            comments: "Observaciones Importantes",
            comments1: "Antes de enviar mensajes, es necesario el registro del token vinculado a la conexión que enviará los mensajes. <br />Para realizar el registro acceda al menú 'Conexiones', haga clic en el botón editar de la conexión e inserte el token en el debido campo.",
            comments2: "El número para envío no debe tener máscara o caracteres especiales y debe ser compuesto por:",
            codeCountry: "Código del País",
            code: "DDD",
            number: "Número"
          },
          text: {
            title: "1. Mensajes de Texto",
            instructions: "Siguen abajo la lista de informaciones necesarias para envío de los mensajes de texto:"
          },
          media: {
            title: "2. Mensajes de Media",
            instructions: "Siguen abajo la lista de informaciones necesarias para envío de los mensajes de texto:"
          }
        },
        messages: {
          noPermission: "Esta empresa no tiene permiso para acceder a esta página! Te estamos redirigiendo.",
          success: "Mensaje enviado con éxito",
        },
        form: {
          send: "Enviar",
          testSend: "Prueba de Envío",
        },
        documentation: {
          endpoint: "Endpoint: ",
          method: "Método: ",
          post: "POST",
          headers: "Headers: ",
          headersTextAuth: "Authorization Bearer (token registrado) y Content-Type (application/json)",
          headersMediaAuth: "Authorization Bearer (token registrado) y Content-Type (multipart/form-data)",
          body: "Body: ",
          formData: "FormData: ",
          bodyExample: "{\n  \"number\": \"558599999999\",\n  \"body\": \"Message\",\n  \"userId\": \"ID usuario o \\\"\\\"\",\n  \"queueId\": \"ID Cola o \\\"\\\"\",\n  \"sendSignature\": \"Firmar mensaje - true/false\",\n  \"closeTicket\": \"Cerrar el ticket - true/false\"\n}",
          formDataFields: {
            number: "number: 558599999999",
            body: "body: Message",
            userId: "userId: ID usuario o \\\"\\\"",
            queueId: "queueId: ID de la cola o \\\"\\\"",
            medias: "medias: archivo",
            sendSignature: "sendSignature: Firmar mensaje true/false",
            closeTicket: "closeTicket: Cerrar ticket true/false",
          },
        },
      },
      notifications: {
        noTickets: "Ninguna notificación."
      },
      quickMessages: {
        title: "Respuestas Rápidas",
        searchPlaceholder: "Buscar...",
        noAttachment: "Sin anexo",
        confirmationModal: {
          deleteTitle: "Exclusión",
          deleteMessage: "¡Esta acción es irreversible! ¿Desea proseguir?"
        },
        buttons: {
          add: "Agregar",
          attach: "Anexar Archivo",
          cancel: "Cancelar",
          edit: "Editar"
        },
        toasts: {
          success: "¡Atajo agregado con éxito!",
          deleted: "¡Atajo removido con éxito!"
        },
        dialog: {
          title: "Mensaje Rápida",
          shortcode: "Atajo",
          message: "Respuesta",
          save: "Guardar",
          cancel: "Cancelar",
          geral: "Permitir editar",
          add: "Agregar",
          edit: "Editar",
          visao: "Permitir visión"
        },
        table: {
          shortcode: "Atajo",
          message: "Mensaje",
          actions: "Acciones",
          mediaName: "Nombre del Archivo",
          status: "Estado"
        }
      },
      contactLists: {
        title: "Listas de Contactos",
        table: {
          name: "Nombre",
          contacts: "Contactos",
          actions: "Acciones"
        },
        buttons: {
          add: "Nueva Lista",
          downloadSample: "Descargar Plantilla de Ejemplo"
        },
        dialog: {
          name: "Nombre",
          company: "Empresa",
          okEdit: "Editar",
          okAdd: "Agregar",
          add: "Agregar",
          edit: "Editar",
          cancel: "Cancelar"
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "Esta acción no se puede revertir."
        },
        toasts: {
          deleted: "Registro eliminado"
        }
      },
      contactListItems: {
        title: "Contactos",
        searchPlaceholder: "Búsqueda",
        buttons: {
          add: "Nuevo",
          lists: "Listas",
          import: "Importar"
        },
        dialog: {
          name: "Nombre",
          number: "Número",
          whatsapp: "Whatsapp",
          email: "E-mail",
          okEdit: "Editar",
          okAdd: "Agregar",
          add: "Agregar",
          edit: "Editar",
          cancel: "Cancelar"
        },
        table: {
          name: "Nombre",
          number: "Número",
          whatsapp: "Whatsapp",
          email: "E-mail",
          actions: "Acciones"
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "Esta acción no se puede revertir.",
          importMessage: "¿Desea importar los contactos de esta planilla? ",
          importTitlte: "Importar"
        },
        toasts: {
          deleted: "Registro eliminado"
        },
        downloadTemplate: "Haga clic aquí para descargar plantilla de ejemplo.",
        whatsappValid: "WhatsApp Válido",
        whatsappInvalid: "WhatsApp Inválido"
      },
      kanban: {
        title: "Kanban",
        subtitle: "Visualización de tickets en formato Kanban",
        searchPlaceholder: "Búsqueda",
        subMenus: {
          list: "Panel",
          tags: "Columnas"
        },
        ticketNumber: "Ticket nº ",
        viewTicket: "Ver Ticket",
        startDate: "Fecha de inicio",
        endDate: "Fecha de fin",
        search: "Buscar",
        addColumns: "+ Agregar columnas",
        ticketTagRemoved: "¡Etiqueta de Ticket Eliminada!",
        ticketTagAdded: "¡Etiqueta de Ticket Agregada con Éxito!",
        ticketMoveError: "Error al mover ticket",
        iconChannelError: "Error",
        noTickets: "Ningún ticket",
        emptyStateTags: "Ninguna etiqueta Kanban creada",
        emptyStateTagsDescription: "Crea tu primera etiqueta Kanban para comenzar a organizar tickets",
        createFirstTag: "Crear Primera Etiqueta",
        emptyStateTickets: "Ningún ticket encontrado",
        emptyStateTicketsDescription: "Ajusta los filtros de fecha o crea nuevos tickets",
        errorTitle: "Error al cargar Kanban",
        errorDescription: "Ocurrió un error al buscar datos. Inténtalo de nuevo.",
        retry: "Intentar Nuevamente",
      },
      campaigns: {
        status: {
          inactive: "Inactiva",
          scheduled: "Programada",
          inProgress: "En Andamento",
          cancelled: "Cancelada",
          finished: "Finalizada",
        },
        common: {
          none: "Ninguna",
          notDefined: "No definida",
          noSchedule: "Sin programación",
          notCompleted: "No concluída",
          enabled: "Habilitada",
          disabled: "Deshabilitada",
        },
        modal: {
          tabLabels: {
            msg1: "Msg. 1",
            msg2: "Msg. 2",
            msg3: "Msg. 3",
            msg4: "Msg. 4",
            msg5: "Msg. 5",
          },
          helpText: "Utiliza variables como {nome}, {numero}, {email} o define variables personalizadas.",
        },
        title: "Campañas",
        searchPlaceholder: "Búsqueda",
        subMenus: {
          list: "Listado",
          listContacts: "Lista de contactos",
          settings: "Configuraciones"
        },
        settings: {
          randomInterval: "Intervalo Aleatorio de Disparo",
          noBreak: "Sin Intervalo",
          intervalGapAfter: "Intervalo mayor después de",
          undefined: "No definido",
          messages: "mensajes",
          laggerTriggerRange: "Intervalo de disparo mayor",
          addVar: "Agregar variable",
          save: "Guardar",
          close: "Cerrar",
          add: "Agregar",
          shortcut: "Atajo",
          content: "Contenido"
        },
        buttons: {
          add: "Nueva Campaña",
          contactLists: "Listas de Contactos",
          stopCampaign: "Parar Campaña",
        },
        table: {
          name: "Nombre",
          whatsapp: "Conexión",
          contactList: "Lista de Contactos",
          option: "Ninguna",
          disabled: "Deshabilitada",
          enabled: "Habilitada",
          status: "Estado",
          scheduledAt: "Programación",
          completedAt: "Concluída",
          confirmation: "Confirmación",
          actions: "Acciones"
        },
        dialog: {
          new: "Nueva Campaña",
          update: "Editar Campaña",
          readonly: "Apenas Visualización",
          help: "Utiliza variables como {nome}, {numero}, {email} o define variables personalizadas.",
          form: {
            name: "Nombre",
            message1: "Mensaje 1",
            message2: "Mensaje 2",
            message3: "Mensaje 3",
            message4: "Mensaje 4",
            message5: "Mensaje 5",
            confirmationMessage1: "Mensaje de Confirmación 1",
            confirmationMessage2: "Mensaje de Confirmación 2",
            confirmationMessage3: "Mensaje de Confirmación 3",
            confirmationMessage4: "Mensaje de Confirmación 4",
            confirmationMessage5: "Mensaje de Confirmación 5",
            messagePlaceholder: "Contenido del mensaje",
            whatsapp: "Conexión",
            status: "Estado",
            scheduledAt: "Programación",
            confirmation: "Confirmación",
            contactList: "Lista de Contacto",
            tagList: "Etiquetas",
            statusTicket: "Estado del Ticket",
            openTicketStatus: "Abierto",
            pendingTicketStatus: "Pendiente",
            closedTicketStatus: "Cerrado",
            enabledOpenTicket: "Habilitado",
            disabledOpenTicket: "Deshabilitado",
            openTicket: "Abrir ticket"
          },
          buttons: {
            add: "Agregar",
            edit: "Actualizar",
            okadd: "Ok",
            cancel: "Cancelar Disparos",
            restart: "Reiniciar Disparos",
            close: "Cerrar",
            attach: "Anexar Archivo"
          }
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "Esta acción no se puede revertir."
        },
        toasts: {
          success: "Operación realizada con éxito",
          cancel: "Campaña cancelada",
          restart: "Campaña reiniciada",
          deleted: "Registro eliminado"
        },
        noPermission: "¡Esta empresa no tiene permisos para acceder a esta página! Te estamos redirigiendo.",
      },
      campaignReport: {
        title: "Informe de",
        inactive: "Inactiva",
        scheduled: "Programada",
        process: "En Andamento",
        cancelled: "Cancelada",
        finished: "Finalizada",
        campaign: "Campaña",
        validContacts: "Contactos Válidos",
        confirmationsRequested: "Confirmaciones Solicitadas",
        confirmations: "Confirmaciones",
        deliver: "Entregues",
        connection: "Conexión",
        contactLists: "Lista de Contactos",
        schedule: "Programación",
        conclusion: "Conclusión",
        noPermission: "¡Esta empresa no tiene permisos para acceder a esta página! Te estamos redirigiendo.",
        status: "Estado:",
        of: "de",
      },
      announcements: {
        title: "Informativos",
        searchPlaceholder: "Búsqueda",
        active: "Activo",
        inactive: "Inactivo",
        buttons: {
          add: "Nuevo Informativo",
          contactLists: "Listas de Informativos"
        },
        table: {
          priority: "Prioridad",
          title: "Título",
          text: "Texto",
          mediaName: "Archivo",
          status: "Estado",
          actions: "Acciones"
        },
        dialog: {
          edit: "Edición de Informativo",
          add: "Nuevo Informativo",
          update: "Editar Informativo",
          readonly: "Apenas Visualización",
          form: {
            priority: "Prioridad",
            title: "Título",
            text: "Texto",
            mediaPath: "Archivo",
            status: "Estado",
            high: "Alta",
            medium: "Media",
            low: "Baja",
            active: "Activo",
            inactive: "Inactivo"
          },
          buttons: {
            add: "Agregar",
            edit: "Actualizar",
            okadd: "Ok",
            cancel: "Cancelar",
            close: "Cerrar",
            attach: "Anexar Archivo"
          }
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "Esta acción no se puede revertir."
        },
        toasts: {
          success: "Operación realizada con éxito",
          deleted: "Registro eliminado",
          noPermission: "¡Esta empresa no tiene permisos para acceder a esta página! Te estamos redirigiendo."
        }
      },
      campaignsConfig: {
        title: "Configuraciones de Campañas",
        noPermissionMessage: "¡Esta empresa no tiene permisos para acceder a esta página! Te estamos redirigiendo.",
        settingsSaved: "Configuraciones guardadas",
        intervals: "Intervalos",
        seconds: "segundos",
      },
      campaignsPhrase: {
        title: "Campañas",
        phraseDeleted: "Frase eliminada",
        phraseUpdated: "¡Frase modificada con éxito!",
        phraseCreated: "¡Frase creada con éxito!",
        addCampaign: "Campaña",
        table: {
          name: "Nombre",
          status: "Estado",
          active: "Activo",
          inactive: "Desactivado",
          empty: "No se encontraron campañas por frase",
        },
        modal: {
          editTitle: "Editar campaña con flujo por frase",
          newTitle: "Nueva campaña con flujo por frase",
          nameLabel: "Nombre del disparo por frase",
          flowLabel: "Elige un flujo",
          flowPlaceholder: "Elige un flujo",
          connectionPlaceholder: "Selecciona una Conexión",
          phraseLabel: "¿Qué frase dispara el flujo?",
          matchTypeLabel: "Tipo de coincidencia",
          matchTypeExact: "Coincidencia Exacta",
          matchTypeContains: "Contiene la palabra",
          matchTypeTooltip: "Exacta: el mensaje debe ser igual a la palabra. Contiene: la palabra puede aparecer en cualquier parte del mensaje",
          statusLabel: "Estado",
          cancelButton: "Cancelar",
          saveButton: "Guardar campaña",
          createButton: "Crear campaña",
        },
      },
      queues: {
        title: "Colas & Chatbot",
        table: {
          name: "Nombre",
          color: "Color",
          greeting: "Mensaje de bienvenida",
          orderQueue: "Ordenación de la cola (bot)",
          actions: "Acciones",
          ID: "ID"
        },
        buttons: {
          add: "Agregar cola"
        },
        toasts: {
          success: "Cola guardada con éxito",
          deleted: "Cola eliminada con éxito",
          queueDeleted: "¡Cola eliminada con éxito!",
          botSaved: "Bot guardado con éxito",
          clickToSave: "Haga clic en guardar para registrar los cambios",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "¿Estás seguro? ¡Esta acción no se puede deshacer! Las atenciones de esta cola seguirán existiendo, pero ya no tendrán ninguna cola asignada."
        }
      },
      queue: {
        queueData: "Datos"
      },
      queueSelect: {
        inputLabel: "Colas",
        inputLabelRO: "Colas de solo lectura",
        withoutQueue: "Sin cola",
        undefined: "Cola no encontrada",
        errors: {
          loadError: "QUEUESELETSINGLE >>>"
        }
      },
      reports: {
        title: "Informes de Atenciones",
        table: {
          id: "Ticket",
          user: "Usuario",
          dateOpen: "Fecha Apertura",
          dateClose: "Fecha Cierre",
          NPS: "NPS",
          status: "Estado",
          whatsapp: "Conexión",
          queue: "Cola",
          actions: "Acciones",
          lastMessage: "Últ. Mensaje",
          contact: "Cliente",
          supportTime: "Tiempo de Atención"
        },
        buttons: {
          filter: "Aplicar Filtro",
          onlyRated: "Apenas Evaluados"
        },
        searchPlaceholder: "Buscar..."
      },
      queueIntegration: {
        title: "Integraciones",
        table: {
          id: "ID",
          type: "Tipo",
          name: "Nombre",
          projectName: "Nombre del Proyecto",
          language: "Idioma",
          lastUpdate: "Última actualización",
          actions: "Acciones"
        },
        buttons: {
          add: "Agregar Proyecto"
        },
        searchPlaceholder: "Buscar...",
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "¿Estás seguro? ¡Esta acción no se puede revertir! y será eliminada de las colas y conexiones vinculadas"
        },
        toasts: {
          deleted: "¡Integración eliminada con éxito!",
        },
        messages: {
          noPermission: "¡Esta empresa no tiene permiso para acceder a esta página! Te estamos redirigiendo.",
        },
      },
      users: {
        title: "Usuarios",
        table: {
          status: "Estado",
          avatar: "Avatar",
          name: "Nombre",
          email: "Correo electrónico",
          profile: "Perfil",
          startWork: "Inicio de trabajo",
          endWork: "Fin de trabajo",
          actions: "Acciones",
          ID: "ID"
        },
        profile: {
          admin: "Admin",
          user: "Usuario",
        },
        status: {
          enabled: "Habilitado",
          disabled: "Deshabilitado",
        },
        upload: {
          avatar: "Subir Avatar",
        },
        buttons: {
          add: "Agregar usuario"
        },
        toasts: {
          deleted: "Usuario eliminado con éxito."
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "Todos los datos del usuario se perderán. Los atenciones abiertos de este usuario se moverán para la cola."
        }
      },
      compaies: {
        title: "Empresas",
        form: {
          documentLabel: "CPF/CNPJ (opcional)",
          documentPlaceholder: "000.000.000-00 o 00.000.000/0000-00",
          documentInvalid: "CPF/CNPJ inválido",
          documentDuplicate: "CPF/CNPJ ya registrado",
          documentNotProvided: "No informado",
          nameRequired: "Nombre es obligatorio",
          emailRequired: "Correo electrónico es obligatorio",
        },
        table: {
          ID: "ID",
          status: "Activo",
          name: "Nombre",
          email: "Correo electrónico",
          password: "Contraseña",
          phone: "Teléfono",
          plan: "Plan",
          active: "Activo",
          numberAttendants: "Atendentes",
          numberConections: "Conexiones",
          value: "Valor",
          namePlan: "Nombre Plan",
          numberQueues: "Filas",
          useCampaigns: "Campañas",
          useExternalApi: "Rest API",
          useFacebook: "Facebook",
          useInstagram: "Instagram",
          useWhatsapp: "Whatsapp",
          useInternalChat: "Chat Interno",
          useSchedules: "Programación",
          createdAt: "Creada En",
          dueDate: "Vencimiento",
          lastLogin: "Últ. Login",
          actions: "Acciones",
          money: "€",
          yes: "Sí",
          no: "No",
          document: "CNPJ/CPF",
          recurrence: "Recurrencia",
          monthly: "Mensual",
          bimonthly: "Bimestral",
          quarterly: "Trimestral",
          semester: "Semestral",
          yearly: "Anual",
          clear: "Limpiar",
          delete: "Eliminar",
          user: "Usuario",
          save: "Guardar",
          folderSize: "Tamaño Carpeta",
          totalFiles: "Total Archivos",
          lastUpdate: "Última Actualización",
        },
        searchPlaceholder: "Buscar empresas...",
        searchLabel: "Campo de búsqueda de empresas",
        clearSearch: "Limpiar búsqueda",
        buttons: {
          add: "Agregar empresa"
        },
        toasts: {
          deleted: "Empresa eliminada con éxito."
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "Todos los datos de la empresa se perderán. Los tickets abiertos de este usuario se moverán para la cola."
        },
        notifications: {
          noPermission: "¡Esta empresa no tiene permisos para acceder a esta página! Te estamos redirigiendo."
        },
      },
      plans: {
        form: {
          name: "Nombre",
          users: "Usuarios",
          connections: "Conexiones",
          campaigns: "Campañas",
          schedules: "Programaciones",
          enabled: "Habilitadas",
          disabled: "Desabilitadas",
          clear: "Cancelar",
          delete: "Eliminar",
          save: "Guardar",
          yes: "Sí",
          no: "No",
          money: "€",
          public: "Público"
        }
      },
      helps: {
        title: "Central de Ayuda",
        thumbnail: "Miniatura",
        videoPlayerTitle: "Reproductor de video de YouTube",
        settings: {
          codeVideo: "Código del Video",
          description: "Descripción",
          clear: "Limpiar",
          delete: "Eliminar",
          save: "Guardar"
        }
      },
      schedules: {
        title: "Programaciones",
        confirmationModal: {
          deleteTitle: "¿Estás seguro de que quieres eliminar esta programación?",
          deleteMessage: "Esta acción no se puede revertir."
        },
        table: {
          contact: "Contacto",
          body: "Mensaje",
          sendAt: "Fecha de Programación",
          sentAt: "Fecha de Envío",
          status: "Estado",
          actions: "Acciones"
        },
        buttons: {
          add: "Nueva Programación"
        },
        toasts: {
          deleted: "Programación eliminada con éxito."
        }
      },
      tags: {
        title: "Tags",
        confirmationModal: {
          deleteTitle: "¿Estás seguro de que quieres eliminar esta etiqueta?",
          deleteMessage: "Esta acción no se puede revertir."
        },
        table: {
          id: "ID",
          name: "Nombre",
          kanban: "Kanban",
          color: "Color",
          tickets: "Registros Tags",
          contacts: "Contactos",
          actions: "Acciones"
        },
        buttons: {
          add: "Nueva Tag"
        },
        toasts: {
          deleted: "Etiqueta eliminada con éxito."
        }
      },
      tagsKanban: {
        title: "Columnas",
        laneDefault: "Abierto",
        confirmationModal: {
          deleteTitle: "¿Estás seguro de que quieres eliminar esta columna?",
          deleteMessage: "Esta acción no se puede revertir."
        },
        table: {
          name: "Nombre",
          color: "Color",
          tickets: "Tickets",
          actions: "Acciones"
        },
        buttons: {
          add: "Nueva Columna",
          backToKanban: "Volver al Kanban"
        },
        toasts: {
          deleted: "Columna eliminada con éxito."
        }
      },
      files: {
        title: "Lista de archivos",
        table: {
          name: "Nombre",
          contacts: "Contactos",
          actions: "Acción"
        },
        toasts: {
          deleted: "¡Lista eliminada con éxito!",
          deletedAll: "¡Todas las listas fueron eliminadas con éxito!"
        },
        buttons: {
          add: "Agregar",
          deleteAll: "Eliminar Todos"
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteAllTitle: "Eliminar Todos",
          deleteMessage: "¿Estás seguro de que deseas eliminar esta lista?",
          deleteAllMessage: "¿Estás seguro de que deseas eliminar todas las listas?"
        }
      },
      settings: {
        success: "Configuraciones guardadas con éxito.",
        currency: "Moneda",
        title: "Configuraciones",
        tabs: {
          options: "Opciones",
          schedules: "Horarios",
          companies: "Empresas",
          plans: "Planes",
          helps: "Ayuda",
          whitelabel: "Marca Blanca",
          timezone: "Zona Horaria"
        },
        settingsConfig: {
          userCreation: {
            name: "Creación de usuario",
            options: {
              enabled: "Activado",
              disabled: "Desactivado"
            }
          },
          options: {
            disabled: "Deshabilitado",
            enabled: "Habilitado",
            updating: "Actualizando...",
            creationCompanyUser: "Creación de Company/Usuario",
            evaluations: "Evaluaciones",
            officeScheduling: "Horario de Atención",
            queueManagement: "Gerenciamiento por Cola",
            companyManagement: "Gerenciamiento por Empresa",
            connectionManagement: "Gerenciamiento por Conexión",
            sendGreetingAccepted: "Enviar saludo al aceptar el ticket",
            sendMsgTransfTicket: "Enviar mensaje transferencia de sector/agente",
            checkMsgIsGroup: "Ignorar Mensajes de Grupos",
            chatBotType: "Tipo del Bot",
            userRandom: "Escolher atendente aleatório",
            buttons: "Botones",
            acceptCallWhatsapp: "Informar que no acepta llamadas en whatsapp?",
            sendSignMessage: "Permite atendente escolher ENVIAR Assinatura",
            sendGreetingMessageOneQueues: "Enviar saludo cuando haya solamente 1 fila",
            sendQueuePosition: "Enviar mensaje con la posición de la cola",
            sendFarewellWaitingTicket: "Enviar mensaje de despedida en el Aguardando",
            acceptAudioMessageContact: "Aceita receber audio de todos contatos?",
            enableLGPD: "Habilitar tratamiento LGPD",
            requiredTag: "Tag obligatoria para cerrar ticket",
            closeTicketOnTransfer: "Cerrar ticket al transferir para otra cola",
            DirectTicketsToWallets: "Mover automáticamente cliente para cartera",
            showNotificationPending: "Mostrar notificación para tickets pendientes",
            autoTranslate: "Traducción Automática de Mensajes",
            translateApiKey: "API Key OpenAI (para traducción)"
          },
          customMessages: {
            sendQueuePositionMessage: "Mensaje de posición en la cola",
            AcceptCallWhatsappMessage: "Mensaje para informar que no acepta llamadas",
            greetingAcceptedMessage: "Mensaje de Saludo al aceptar ticket",
            transferMessage: "Mensaje de transferencia - ${queue.name} = fila destino"
          },
          LGPD: {
            title: "LGPD",
            welcome: "Mensaje de bienvenida(LGPD)",
            linkLGPD: "Link de la política de privacidad",
            obfuscateMessageDelete: "Ofuscar mensaje apagada",
            alwaysConsent: "Siempre solicitar consentimiento",
            obfuscatePhoneUser: "Ofuscar número teléfono para usuarios",
            enabled: "Habilitado",
            disabled: "Deshabilitado"
          },
        },
        toasts: {
          schedulesSavedSuccess: "Horarios actualizados con éxito.",
          operationUpdatedSuccess: "Operación actualizada con éxito.",
          recordsLoadError: "No se pudo cargar la lista de registros",
          operationSuccess: "¡Operación realizada con éxito!",
          operationError: "No se pudo realizar la operación. Verifique si ya existe un registro con el mismo nombre o si todos los campos están completados correctamente",
          operationDeleteError: "No se pudo realizar la operación",
          imageUploadProgress: "La imagen está {{progress}}% subida...",
          imageUploadError: "Hubo un problema al subir la imagen.",
          companyOperationError: "No se pudo realizar la operación. Verifique si ya existe una empresa con el mismo nombre o si todos los campos están completados correctamente",
          planOperationError: "No se pudo realizar la operación. Verifique si ya existe un plan con el mismo nombre o si todos los campos están completados correctamente",
          helpOperationError: "No se pudo realizar la operación. Verifique si ya existe una ayuda con el mismo nombre o si todos los campos están completados correctamente",
        },
        whitelabel: {
          primaryColorLight: "Color Primario Modo Claro",
          primaryColorDark: "Color Primario Modo Oscuro",
          systemName: "Nombre del Sistema",
          lightLogo: "Logo Claro",
          darkLogo: "Logo Oscuro",
          favicon: "Favicon",
        },
        chatBotType: {
          text: "Texto",
        },
        modals: {
          deleteTitle: "Eliminar Registro",
          deleteConfirmation: "¿Realmente desea eliminar este registro?",
        },
        managers: {
          common: {
            yes: "Sí",
            no: "No",
          },
          companies: {
            recurrence: "Recurrencia",
          },
          plans: {
            queues: "Colas",
            value: "Valor",
            whatsapp: "WhatsApp",
            facebook: "Facebook",
            instagram: "Instagram",
            internalChat: "Chat Interno",
            externalAPI: "API Externa",
            kanban: "Kanban",
            talkAI: "Prompts",
            integrations: "Integraciones",
          },
          helps: {
            title: "Título",
            video: "Video",
          },
        },
        timezone: {
          companyTimezone: {
            title: "Zona Horaria de la Empresa",
            selectLabel: "Seleccionar zona horaria",
            customHelperText: "Zona horaria personalizada para esta empresa",
            inheritedHelperText: "Usando la zona horaria por defecto del sistema",
          },
          defaultTimezone: {
            title: "Zona Horaria Por Defecto del Sistema",
            selectLabel: "Seleccionar zona horaria por defecto",
            helperText: "Esta zona horaria se utilizará por defecto para todas las empresas que no tengan una zona horaria personalizada",
          },
          buttons: {
            save: "Guardar",
            useDefault: "Usar Por Defecto",
            saveDefault: "Guardar Por Defecto",
          },
          preview: {
            currentTime: "Hora Actual",
            defaultTime: "Hora Por Defecto",
          },
          status: {
            custom: "Personalizado",
            inherited: "Heredado",
          },
          errors: {
            fetchAvailableTimezones: "Error al cargar las zonas horarias disponibles",
            fetchCompanyTimezone: "Error al cargar la zona horaria de la empresa",
            updateDefaultTimezone: "Error al actualizar la zona horaria por defecto",
            updateCompanyTimezone: "Error al actualizar la zona horaria de la empresa",
          },
          success: {
            defaultTimezoneUpdated: "Zona horaria por defecto actualizada con éxito",
            companyTimezoneUpdated: "Zona horaria de la empresa actualizada con éxito",
            companyTimezoneReset: "Zona horaria de la empresa restablecida con éxito",
          },
        }
      },
      messagesList: {
        header: {
          assignedTo: "Atribuído a:",
          dialogRatingTitle: "¿Desea dejar una evaluación de atención para el cliente?",
          dialogClosingTitle: "¡Finalizando el atención con el cliente!",
          dialogRatingCancel: "Resolver CON Mensaje de Despedida",
          dialogRatingSuccess: "Resolver y Enviar Evaluación",
          dialogRatingWithoutFarewellMsg: "Resolver SIN Mensaje de Despedida",
          ratingTitle: "Elige un menú de evaluación",
          notMessage: "Ningún mensaje seleccionado",
          amount: "Valor de prospecção",
          buttons: {
            return: "Retornar",
            resolve: "Resolver",
            reopen: "Reabrir",
            accept: "Aceptar",
            rating: "Enviar Evaluación",
            enableIntegration: "Habilitar integración",
            disableIntegration: "Deshabilitar integración",
            logTicket: "Logs del Ticket",
            requiredTag: "Debes asignar una etiqueta antes de cerrar el ticket.",
            enableTranslate: "Activar traducción automática para este contacto",
            disableTranslate: "Desactivar traducción automática para este contacto",
            translateEnabled: "Traducción activada",
            translateDisabled: "Traducción desactivada",
          }
        }
      },
      messagesInput: {
        placeholderPrivateMessage: "Escribe un mensaje o aprieta / para respuestas rápidas",
        placeholderOpen: "Escribe un mensaje o aprieta / para respuestas rápidas",
        placeholderClosed: "Reabra o acepte este ticket para enviar un mensaje.",
        signMessage: "Assinar",
        privateMessage: "Mensaje Privado"
      },
      contactDrawer: {
        header: "Datos del contacto",
        buttons: {
          edit: "Editar contacto",
          block: "Bloquear",
          unblock: "Desbloquear",
          blockContact: "Bloquear contacto",
          unblockContact: "Desbloquear contacto",
        },
        toasts: {
          contactBlocked: "Contacto bloqueado",
          contactUnblocked: "Contacto desbloqueado",
        },
        confirmationModal: {
          blockMessage: "¿Realmente quieres bloquear este contacto? Ya no recibirás mensajes de él.",
          unblockMessage: "¿Realmente quieres desbloquear este contacto? Podrás comenzar a recibir mensajes de él.",
        },
        extraInfo: "Otras informaciones"
      },
      messageVariablesPicker: {
        label: "Variavéis disponibles",
        vars: {
          contactFirstName: "Primer Nombre",
          contactName: "Nombre",
          user: "Agente",
          greeting: "Saludo",
          protocolNumber: "Protocolo",
          date: "Fecha",
          hour: "Hora",
          ticket_id: "Nº de Llamada",
          queue: "Sector",
          connection: "Conexión"
        }
      },
      ticketOptionsMenu: {
        schedule: "Programación",
        delete: "Deletar",
        transfer: "Transferir",
        registerAppointment: "Observaciones del Contacto",
        resolveWithNoFarewell: "Finalizar sin despedida",
        acceptAudioMessage: "¿Aceptar audios del contacto?",
        appointmentsModal: {
          title: "Observaciones del Ticket",
          textarea: "Observación",
          placeholder: "Inserta aquí la información que deseas registrar"
        },
        confirmationModal: {
          title: "Deletar el ticket del contacto",
          titleFrom: "del contacto ",
          message: "¡Atención! Todas las mensajes relacionadas con el ticket se perderán."
        },
        buttons: {
          delete: "Eliminar",
          cancel: "Cancelar"
        }
      },
      confirmationModal: {
        buttons: {
          confirm: "Ok",
          cancel: "Cancelar"
        }
      },
      messageInput: {
        tooltip: {
          signature: "Habilitar/Deshabilitar Firma",
          privateMessage: "Habilitar/Deshabilitar Mensaje Privada",
          meet: "Enviar link para videoconferencia"
        },
        type: {
          imageVideo: "Fotos y vídeos",
          cam: "Cámara",
          contact: "Contacto",
          meet: "Vídeo llamada"
        }
      },
      messageOptionsMenu: {
        delete: "Deletar",
        reply: "Responder",
        edit: "Editar",
        forward: "Reenviar",
        toForward: "Reenviar",
        talkTo: "Conversar Con",
        react: "Reaccionar",
        confirmationModal: {
          title: "¿Apagar mensaje?",
          message: "Esta acción no se puede revertir."
        }
      },
      invoices: {
        table: {
          invoices: "Facturas",
          details: "Detalles",
          users: "Usuarios",
          connections: "Conexiones",
          queue: "Colas",
          value: "Valor",
          expirationDate: "Fecha Venc.",
          action: "Acción"
        }
      },
      userStatus: {
        online: "En línea",
        offline: "Fuera de línea",
      },
      backendErrors: {
        ERR_NO_OTHER_WHATSAPP: "Debe haber al menos un WhatsApp predeterminado.",
        ERR_NO_DEF_WAPP_FOUND: "Ningún WhatsApp predeterminado encontrado. Verifique la página de conexiones.",
        ERR_WAPP_NOT_INITIALIZED: "Esta sesión de WhatsApp no fue inicializada. Verifique la página de conexiones.",
        ERR_WAPP_CHECK_CONTACT: "No fue posible verificar el contacto de WhatsApp. Verifique la página de conexiones",
        ERR_WAPP_INVALID_CONTACT: "Este no es un número de Whatsapp válido.",
        ERR_WAPP_DOWNLOAD_MEDIA: "No fue posible descargar medios de WhatsApp. Verifique la página de conexiones.",
        ERR_INVALID_CREDENTIALS: "Error de autenticación. Por favor, intente nuevamente.",
        ERR_SENDING_WAPP_MSG: "Error al enviar mensaje de WhatsApp. Verifique la página de conexiones.",
        ERR_DELETE_WAPP_MSG: "No fue posible eliminar el mensaje de WhatsApp.",
        ERR_OTHER_OPEN_TICKET: "Ya existe un tíquete abierto para este contacto.",
        ERR_TICKET_ALREADY_ACCEPTED: "Este ticket ya ha sido aceptado por otro agente.",
        ERR_SESSION_EXPIRED: "Sesión expirada. Por favor, inicie sesión.",
        ERR_USER_CREATION_DISABLED: "La creación de usuario fue deshabilitada por el administrador.",
        ERR_NO_PERMISSION: "No tiene permiso para acceder a este recurso.",
        ERR_DUPLICATED_CONTACT: "Ya existe un contacto con este número.",
        ERR_NO_SETTING_FOUND: "Ninguna configuración encontrada con este ID.",
        ERR_NO_CONTACT_FOUND: "Ningún contacto encontrado con este ID.",
        ERR_NO_TICKET_FOUND: "Ningún tíquete encontrado con este ID.",
        ERR_NO_USER_FOUND: "Ningún usuario encontrado con este ID.",
        ERR_NO_WAPP_FOUND: "Ningún WhatsApp encontrado con este ID.",
        ERR_CREATING_MESSAGE: "Error al crear mensaje en la base de datos.",
        ERR_CREATING_TICKET: "Error al crear tíquete en la base de datos.",
        ERR_FETCH_WAPP_MSG: "Error al buscar el mensaje en WhatsApp, tal vez sea demasiado antiguo.",
        ERR_QUEUE_COLOR_ALREADY_EXISTS: "Esta color ya está en uso, elija otra.",
        ERR_WAPP_GREETING_REQUIRED: "El mensaje de bienvenida es obligatorio cuando hay más de una cola.",
        ERR_OUT_OF_HOURS: "¡Fuera del Horario de Expediente!",
        ERR_GENERIC_ERROR: "¡Ocurrió un error!",
      },
      flowBuilderConfig: {
        title: "Diseña tu flujo",
        actions: {
          import: "Importar",
          export: "Exportar",
          save: "Guardar"
        },
        messages: {
          flowStart: "Inicio del flujo",
          interval: "Intervalo {{seconds}} seg.",
          rememberSave: "¡No olvides guardar tu flujo!",
          flowSaved: "Flujo guardado con éxito"
        },
        nodes: {
          start: "Inicio",
          content: "Contenido",
          menu: "Menú",
          optionFormat: "[{{number}}] {{value}}",
          randomizer: "Aleatorizador",
          interval: "Intervalo",
          ticket: "Ticket",
          typebot: "TypeBot",
          openai: "OpenAI",
          question: "Pregunta",
          image: "Imagen",
          video: "Vídeo",
          audioNode: {
            title: "Audio",
            recordedLive: "Grabado en vivo",
            audioSent: "Audio enviado",
            browserNotSupported: "su navegador no soporta HTML5"
          }
        },
        nodeDescriptions: {
          startFlow: "¡Este bloque marca el inicio de tu flujo!"
        },
        edges: {
          edgeWithoutOnDelete: "Edge sin onDelete configurado:",
          errorDeletingEdge: "Error al eliminar edge:",
          removeEdgeTooltip: "Eliminar conexión"
        },
        units: {
          seconds: "segundos"
        },
        validation: {
          tooShort: "¡Muy corto!",
          tooLong: "¡Muy largo!",
          enterName: "¡Ingresa un nombre!",
          enterMessage: "¡Ingresa un mensaje!",
          required: "Obligatorio",
          describeAiTraining: "Describe el entrenamiento para Inteligencia Artificial",
          invalidModel: "Modelo inválido",
          informModel: "Informa el modelo",
          minTokens: "Mínimo 10 tokens",
          maxTokens: "Máximo 4096 tokens",
          informMaxTokens: "Informa el número máximo de tokens",
          minZero: "Mínimo 0",
          maxOne: "Máximo 1",
          informTemperature: "Informa la temperatura",
          informApiKey: "Informa la API Key",
          minOneMessage: "Mínimo 1 mensaje",
          maxFiftyMessages: "Máximo 50 mensajes",
          informMaxMessages: "Informa el número máximo de mensajes",
          informVoiceMode: "Informa el modo para Voz"
        },
        buttons: {
          add: "Agregar",
          save: "Guardar",
          edit: "Editar"
        },
        modals: {
          condition: {
            addTitle: "Agregar condición al flujo",
            editTitle: "Editar condición",
            fieldLabel: "Campo de la condición (Digite solo 1 clave)",
            validationRule: "Regla de validación",
            conditionValue: "Valor de la condición a ser analizada"
          },
          ticket: {
            addQueueError: "Agrega una cola",
            addTitle: "Agregar una cola al flujo",
            editTitle: "Editar cola",
            selectConnection: "Selecciona una Conexión"
          },
          randomizer: {
            addIntervalError: "Agrega el valor de intervalo",
            maxTimeError: "Máximo de tiempo alcanzado 120 segundos",
            addTitle: "Agregar un aleatorizador al flujo",
            editTitle: "Editar aleatorizador"
          },
          openai: {
            addTitle: "Agregar OpenAI/Gemini al flujo",
            editTitle: "Editar OpenAI/Gemini del flujo"
          },
          question: {
            addTitle: "Agregar Pregunta al flujo",
            editTitle: "Editar Pregunta",
            createTitle: "Crear Pregunta en el flujo",
            messageLabel: "Mensaje",
            saveAnswer: "Guardar respuesta"
          }
        },
        models: {
          gpt35turbo: "GPT 3.5 Turbo",
          gpt4o: "GPT 4o",
          gemini15flash: "Gemini 1.5 Flash",
          gemini15pro: "Gemini 1.5 Pro",
          gemini20flash: "Gemini 2.0 Flash",
          gemini20pro: "Gemini 2.0 Pro"
        },
        voice: {
          text: "Texto",
          francisca: "Francisca",
          antonio: "Antonio",
          brenda: "Brenda",
          donato: "Donato",
          elza: "Elza",
          fabio: "Fabio",
          giovanna: "Giovanna",
          humberto: "Humberto",
          julio: "Julio",
          leila: "Leila",
          leticia: "Leticia",
          manuela: "Manuela",
          nicolau: "Nicolau",
          valerio: "Valerio",
          yara: "Yara"
        }
      },
      flowBuilderModals: {
        textModal: {
          titleAdd: "Agregar mensaje al flujo",
          titleEdit: "Editar mensaje del flujo",
          buttonAdd: "Agregar",
          buttonSave: "Guardar",
          fields: {
            message: "Mensaje"
          },
          validation: {
            tooShort: "¡Muy corto!",
            tooLong: "¡Muy largo!",
            required: "¡Ingresa un nombre!",
            messageRequired: "¡Ingresa un mensaje!"
          }
        },
        intervalModal: {
          titleAdd: "Agregar un intervalo al flujo",
          titleEdit: "Editar intervalo",
          buttonAdd: "Agregar",
          buttonEdit: "Editar",
          fields: {
            timeInSeconds: "Tiempo en segundos"
          },
          validation: {
            addValue: "Agrega el valor del intervalo",
            maxTime: "Tiempo máximo alcanzado 120 segundos"
          }
        },
        menuModal: {
          titleAdd: "Agregar menú al flujo",
          titleEdit: "Editar menú",
          buttonAdd: "Agregar",
          buttonSave: "Guardar",
          fields: {
            explanationMessage: "Mensaje de explicación del menú",
            addOption: "Agregar Opción",
            typeOption: "Digite {{number}}",
            optionPlaceholder: "Digite opción"
          }
        },
        singleBlockModal: {
          titleAdd: "Agregar contenido al flujo",
          titleEdit: "Editar contenido",
          buttonAdd: "Agregar",
          buttonSave: "Guardar",
          elements: {
            text: "Texto",
            interval: "Intervalo",
            image: "Imagen",
            audio: "Audio",
            video: "Video",
            document: "Documento"
          },
          fields: {
            message: "Mensaje",
            timeInSeconds: "Tiempo en segundos",
            sendAsRecordedAudio: "Enviar como audio grabado en el momento",
            noFileSelected: "Ningún archivo seleccionado"
          },
          buttons: {
            sendImage: "Enviar imagen",
            sendAudio: "Enviar audio",
            sendVideo: "Enviar video",
            sendDocument: "Enviar Documento"
          },
          validation: {
            emptyMessageFields: "¡Campos de mensaje vacíos!",
            intervalValidation: "¡El intervalo no puede ser 0 o mayor que 120!",
            fileTooLarge2MB: "¡Archivo muy grande! Máximo 2MB",
            fileTooLarge5MB: "¡Archivo muy grande! Máximo 5MB",
            fileTooLarge20MB: "¡Archivo muy grande! Máximo 20MB",
            fileTooLarge15MB: "¡Archivo muy grande! Máximo 15MB",
            deleteEmptyCards: "Elimina las tarjetas vacías o envía los archivos pendientes.",
            browserNotSupported: "su navegador no soporta HTML5",
            onlyMp4Videos: "¡ATENCIÓN! ¡Solo videos en MP4!"
          },
          messages: {
            contentAddedSuccess: "¡Contenido agregado con éxito!",
            uploadingFiles: "Subiendo archivos y creando contenido...",
            variables: "Variables"
          }
        },
        randomizerModal: {
          titleAdd: "Agregar un aleatorizador al flujo",
          titleEdit: "Editar aleatorizador",
          buttonAdd: "Agregar",
          buttonEdit: "Editar"
        },
        ticketModal: {
          titleAdd: "Agregar una cola al flujo",
          titleEdit: "Editar cola",
          buttonAdd: "Agregar",
          buttonEdit: "Editar",
          fields: {
            selectConnection: "Seleccione una Conexión"
          },
          validation: {
            addQueue: "Agrega una cola"
          }
        },
        typebotModal: {
          titleAdd: "Agregar Typebot al flujo",
          titleEdit: "Editar Typebot del flujo",
          titleEditFlow: "Editar Typebot del flujo",
          buttonAdd: "Agregar",
          buttonSave: "Guardar"
        },
        openaiModal: {
          titleAdd: "Agregar OpenAI/Gemini al flujo",
          titleEdit: "Editar OpenAI/Gemini del flujo",
          buttonAdd: "Agregar",
          buttonSave: "Guardar",
          models: {
            gpt35: "GPT 3.5 Turbo",
            gpt4o: "GPT 4o",
            gemini15flash: "Gemini 1.5 Flash",
            gemini15pro: "Gemini 1.5 Pro",
            gemini20flash: "Gemini 2.0 Flash",
            gemini20pro: "Gemini 2.0 Pro"
          },
          voices: {
            text: "Texto",
            francisca: "Francisca",
            antonio: "Antonio",
            brenda: "Brenda",
            donato: "Donato",
            elza: "Elza",
            fabio: "Fabio",
            giovanna: "Giovanna",
            humberto: "Humberto",
            julio: "Julio",
            leila: "Leila",
            leticia: "Leticia",
            manuela: "Manuela",
            nicolau: "Nicolau",
            valerio: "Valerio",
            yara: "Yara"
          },
          validation: {
            tooShort: "¡Muy corto!",
            tooLong: "¡Muy largo!",
            required: "Obligatorio",
            promptRequired: "Describe el entrenamiento para Inteligencia Artificial",
            invalidModel: "Modelo inválido",
            minTokens: "Mínimo 10 tokens",
            maxTokens: "Máximo 4096 tokens",
            tokensRequired: "Informa el número máximo de tokens",
            temperatureRequired: "Informa la temperatura",
            temperatureMin: "Mínimo 0",
            temperatureMax: "Máximo 1",
            apiKeyRequired: "Informa la API Key",
            messagesMin: "Mínimo 1 mensaje",
            messagesMax: "Máximo 50 mensajes",
            messagesRequired: "Informa el número máximo de mensajes",
            voiceRequired: "Informa el modo para Voz"
          }
        },
        questionModal: {
          titleAdd: "Agregar Pregunta al flujo",
          titleEdit: "Editar Pregunta del flujo",
          titleCreate: "Crear Pregunta en el flujo",
          buttonAdd: "Agregar",
          buttonSave: "Guardar",
          fields: {
            message: "Mensaje",
            saveAnswer: "Guardar respuesta"
          }
        }
      },
      moments: {
        title: "Panel de Atenciones",
        pending: "Pendientes",
        attendances: "Atenciones: ",
        noQueue: "SIN COLA",
        accessTicket: "Acceder Ticket"
      },
      flowBuilderNodes: {
        message: "Mensaje",
        condition: "Condición",
        image: "Imagen"
      },
      subscription: {
        title: "Suscripción",
        form: {
          licenseLabel: "Período de Licencia",
          licenseExpiresIn: "Su licencia expira en {{days}} días!",
          licenseExpiresToday: "Su licencia expira hoy!",
          billingEmailLabel: "Email de facturación",
          subscribeButton: "¡Suscribirse Ahora!"
        },
        checkout: {
          form: {
            fullName: "Nombre completo*",
            fullNameRequired: "El nombre completo es obligatorio",
            lastName: "Apellido*",
            lastNameRequired: "El apellido es obligatorio",
            address: "Dirección*",
            addressRequired: "La dirección es obligatoria",
            city: "Ciudad*",
            cityRequired: "La ciudad es obligatoria",
            state: "Estado*",
            stateRequired: "El estado es obligatorio",
            document: "RUC/DNI*",
            documentRequired: "RUC/DNI es obligatorio",
            documentInvalid: "Formato de RUC/DNI inválido",
            country: "País*",
            countryRequired: "El país es obligatorio",
            useAddressForPayment: "Usar esta dirección para detalles de pago",
            nameOnCard: "Nombre en la tarjeta*",
            nameOnCardRequired: "El nombre en la tarjeta es obligatorio",
            cardNumber: "Número de tarjeta*",
            cardNumberRequired: "El número de tarjeta es obligatorio",
            cardNumberInvalid: "El número de tarjeta no es válido (ej. 4111111111111)",
            expiryDate: "Fecha de expiración*",
            expiryDateRequired: "La fecha de expiración es obligatoria",
            expiryDateInvalid: "La fecha de expiración no es válida",
            cvv: "CVV*",
            cvvRequired: "CVV es obligatorio",
            cvvInvalid: "CVV es inválido (ej. 357)"
          }
        }
      },
      ticketsResponsive: {
        actions: {
          selectTicket: "Seleccionar Ticket",
          transferTicket: "Transferir Ticket",
          spyConversation: "Espiar Conversación"
        },
        tabs: {
          ticket: "Ticket",
          assistance: "Atenciones"
        },
        search: {
          searchInMessagesTooltip: "Marcar para buscar también en contenidos de mensajes (más lento)"
        },
        filter: {
          all: "Todos"
        },
        sort: {
          ascending: "Ascendente",
          descending: "Descendente"
        },
        dialog: {
          spyingConversation: "Espiando conversación",
          loadingMessages: "Cargando mensajes..."
        },
        status: {
          noQueue: "SIN COLA"
        }
      },
      messagesResponsive: {
        types: {
          location: "Ubicación",
          contact: "Contacto"
        },
        actions: {
          download: "Descargar",
          dropFileHere: "Suelta el archivo aquí"
        },
        status: {
          forwarded: "Reenviada",
          deletedByContact: "🚫 Este mensaje fue eliminado por el contacto",
          deletedMessage: "🚫 _Mensaje eliminado_",
          deletedByMe: "🚫 Este mensaje fue eliminado",
          edited: "Editada"
        },
        reactions: {
          youReacted: "Reaccionaste...",
          contactReacted: " reaccionó... "
        },
        timestamp: {
          today: "HOY"
        },
        placeholder: {
          sayHello: "¡Saluda a tu nuevo contacto!"
        },
        ads: {
          adClick: "Clic de Anuncio",
          defaultUserMessage: "¡Hola! Tengo interés y quisiera más información, por favor."
        },
        warnings: {
          facebookPolicy: "Tienes 24 horas para responder después de recibir un mensaje, según las políticas de Facebook."
        },
        translation: {
          translatedFrom: "Traducido de",
          showOriginal: "Ver original",
          showTranslation: "Ver traducción",
          autoTranslated: "Mensaje traducido automáticamente enviado",
        },
        transcription: {
          transcribe: "Transcribir audio",
          transcribing: "Transcribiendo...",
          showOriginal: "Ver original",
          showTranslation: "Ver traducción",
          language: "Idioma",
        }
      },
      messageInputResponsive: {
        type: {
          document: "Documento",
          buttons: "Botones"
        },
        tooltip: {
          toggleSignature: "Habilitar/Deshabilitar Firma",
          toggleComments: "Habilitar/Deshabilitar Comentarios"
        },
        privateMessage: {
          suffix: "Mensaje Privado"
        }
      },
      tagsResponsive: {
        validation: {
          tooShort: "¡Etiqueta muy corta!"
        },
        placeholder: "Etiquetas"
      },
      showTicketOpenModal: {
        buttons: {
          close: "Cerrar"
        }
      },
      reactions: {
        successMessage: "Reacción enviada con éxito"
      },
      vcardPreview: {
        chatButton: "Chatear"
      },
      locationPreview: {
        viewButton: "Ver"
      },
      contactNotes: {
        addedSuccess: "¡Nota agregada con éxito!",
        deletedSuccess: "¡Nota eliminada con éxito!",
        deleteTitle: "Eliminar Registro",
        deleteConfirmation: "¿Realmente desea eliminar este registro?",
        cancelButton: "Cancelar",
        saveButton: "Guardar"
      },
      validationResponsive: {
        ratingRequired: "Calificación requerida"
      }
    }
  }
};

export { messages };
